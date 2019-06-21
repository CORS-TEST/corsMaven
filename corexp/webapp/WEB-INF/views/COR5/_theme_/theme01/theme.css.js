//CSS=theme.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_align("left middle");
    this._addCss("MainFrame", "align", obj, ["normal"]);
    this._addCss("TitleBarControl", "align", obj, ["normal"]);
    this._addCss("Calendar", "align", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "align", obj, ["normal"]);
    this._addCss("CheckBox", "align", obj, ["normal"]);
    this._addCss("Combo", "align", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "align", obj, ["normal"]);
    this._addCss("Combo>#combolist", "align", obj, ["normal"]);
    this._addCss("Edit", "align", obj, ["normal"]);
    this._addCss("FileUpload", "align", obj, ["normal"]);
    this._addCss("Grid>#controledit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "align", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcombo", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "align", obj, ["normal"]);
    this._addCss("ListBox", "align", obj, ["normal"]);
    this._addCss("Radio", "align", obj, ["normal"]);
    this._addCss("Static", "align", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_LF_Mymenu", "align", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice", "align", obj, ["normal"]);
    this._addCss("Div.div_PopTitle", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.styLog_Text2", "align", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_MF_text1", "align", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_text2", "align", obj, ["mouseover", "pushed", "focused", "selected", "normal", "disabled"]);
    this._addCss("Button.btn_MF_text3", "align", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Edit.login", "align", obj, ["normal"]);
    this._addCss("Static.sta_MF_todo", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_info", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_todo3", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_todo5", "align", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_MF_link1", "align", obj, ["normal", "disabled", "selected", "focused", "mouseover", "pushed"]);
    this._addCss("Static.sta_MF_title1", "align", obj, ["normal", "mouseover"]);
    this._addCss("Combo.essential>#combolist", "align", obj, ["normal"]);
    this._addCss(".cell_left", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_SearchLabel", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_SearchLabel_P", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.styFormTitle", "align", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_FormHelpTitle", "align", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_FormTitle", "align", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Static.sta_POP_Text1", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_ErrorText1", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_ErrorText2", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GID_txt", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GID_txt02", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GID_box", "align", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_Process1", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Process2", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Process3", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Process4", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Process5", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Process6", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_TabS", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_TabN", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("MainFrame", "background", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#maxbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#normalbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#closebutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("VScrollBar>#incbutton", "background", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "background", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "background", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "background", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "background", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "background", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("CheckBox", "background", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "background", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "background", obj, ["normal"]);
    this._addCss("Div", "background", obj, ["normal"]);
    this._addCss("Form", "background", obj, ["normal"]);
    this._addCss("FileUpload", "background", obj, ["normal"]);
    this._addCss("Grid", "background", obj, ["normal"]);
    this._addCss("Grid>#body", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "background", obj, ["normal"]);
    this._addCss("Grid>#summary", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "background", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcombo>#comboedit", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("PopupDiv", "background", obj, ["normal"]);
    this._addCss("Radio", "background", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "background", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "background", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Static", "background", obj, ["normal", "mouseover"]);
    this._addCss("Tab>#extrabutton", "background", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_myinfo", "background", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Tab.tab_TF_menu", "background", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "background", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar", "background", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar", "background", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi", "background", obj, ["normal", "disabled"]);
    this._addCss("Tab.tab_BF_mdi>Tabpage", "background", obj, ["normal"]);
    this._addCss("Static.sta_MF_name", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text1", "background", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MF_notice", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#body", "background", obj, ["normal", "disabled"]);
    this._addCss("Div.div_PopTitle", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.styLog_Text1", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.styLog_Text2", "background", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_MF_text1", "background", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_text2", "background", obj, ["mouseover", "pushed", "focused", "selected", "normal", "disabled"]);
    this._addCss("Button.btn_MF_text3", "background", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Static.sta_MF_info", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_todo1", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_todo2", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_todo4", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_todo5", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_title1", "background", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_WF_GrdBg>Div", "background", obj, ["normal"]);
    this._addCss("Static.sta_POP_PopTitle", "background", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.sta_POP_PopTitle2", "background", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.sta_WF_LabelLine", "background", obj, ["normal", "mouseover"]);
    this._addCss("Edit.edt_WF_Calendaryy", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_WF_CalPrev", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_CalNext", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ComCal", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Calendar.cal_WF_ComCal>#dropbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Static.sta_WF_SearchLabel", "background", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_BF_Location", "background", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Static.styFormTitle", "background", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_FormHelpTitle", "background", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_FormTitle", "background", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Static.sta_WF_Subtitle03", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_POP_Text1", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_ErrorText1", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_ErrorText2", "background", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_LeftMenuFA", "background", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_border("2","solid","#646871ff","");
    this._addCss("MainFrame", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("MainFrame", "color", obj, ["normal"]);
    this._addCss("ChildFrame", "color", obj, ["normal"]);
    this._addCss("Button", "color", obj, ["normal"]);
    this._addCss("Calendar", "color", obj, ["normal", "mouseover", "selected", "focused", "readonly"]);
    this._addCss("Calendar>#calendaredit", "color", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Calendar>#popupcalendar", "color", obj, ["normal"]);
    this._addCss("CheckBox", "color", obj, ["normal", "readonly"]);
    this._addCss("Combo", "color", obj, ["normal", "mouseover", "selected", "focused", "readonly"]);
    this._addCss("Combo>#comboedit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Div", "color", obj, ["normal"]);
    this._addCss("Edit", "color", obj, ["normal", "mouseover", "focused", "readonly"]);
    this._addCss("Form", "color", obj, ["normal"]);
    this._addCss("FileUpload", "color", obj, ["normal"]);
    this._addCss("FileDownload", "color", obj, ["normal"]);
    this._addCss("Grid", "color", obj, ["normal"]);
    this._addCss("Grid>#controledit", "color", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "color", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcombo", "color", obj, ["normal", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Grid>#controlcombo>#comboedit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar", "color", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "color", obj, ["normal"]);
    this._addCss("ListBox", "color", obj, ["normal"]);
    this._addCss("MaskEdit", "color", obj, ["normal", "mouseover", "focused", "readonly"]);
    this._addCss("Menu", "color", obj, ["normal"]);
    this._addCss("PopupDiv", "color", obj, ["normal"]);
    this._addCss("PopupMenu", "color", obj, ["normal"]);
    this._addCss("Radio", "color", obj, ["normal", "disabled", "readonly", "mouseover", "selected"]);
    this._addCss("Spin", "color", obj, ["normal", "mouseover", "focused", "pushed", "readonly"]);
    this._addCss("Spin>#spinedit", "color", obj, ["mouseover", "focused", "disabled"]);
    this._addCss("SpinControl", "color", obj, ["normal", "mouseover", "focused", "pushed", "readonly"]);
    this._addCss("SpinControl>#spinedit", "color", obj, ["mouseover", "focused", "disabled"]);
    this._addCss("Static", "color", obj, ["normal", "mouseover"]);
    this._addCss("Tab", "color", obj, ["mouseover", "selected", "focused"]);
    this._addCss("TextArea", "color", obj, ["normal", "mouseover", "focused", "readonly"]);
    this._addCss("Grid.grd_LF_Mymenu", "color", obj, ["normal"]);
    this._addCss("Edit.login", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Button.btn_MF_todotab", "color", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_MF_todotab_N", "color", obj, ["enabled", "disabled", "focused", "selected", "normal"]);
    this._addCss("Static.sta_POP_PopTitle2", "color", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Edit.readonly", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.readonly", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.readonly", "color", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "color", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Spin.readonly", "color", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Edit.readonly_P", "color", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("MaskEdit.readonly_P", "color", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("TextArea.readonly_P", "color", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("Calendar.readonly_P", "color", obj, ["normal", "mouseover", "focused", "selected", "disabled", "readonly"]);
    this._addCss("Combo.readonly_P", "color", obj, ["normal", "mouseover", "focused", "selected", "disabled", "readonly"]);
    this._addCss("Combo.readonly_C", "color", obj, ["normal", "mouseover", "focused", "selected", "disabled", "readonly"]);
    this._addCss(".Cellgrd_WF_sum01", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_SearchLabel", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_SearchLabel_P", "color", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_Module", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Subtitle", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Subtitle02", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Subtitle03", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_POP_Text1", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Desc01", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Desc02", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Info", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_ErrorText2", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("MainFrame", "font", obj, ["normal"]);
    this._addCss("ChildFrame", "font", obj, ["normal"]);
    this._addCss("Button", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Calendar", "font", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "font", obj, ["normal"]);
    this._addCss("CheckBox", "font", obj, ["normal"]);
    this._addCss("Combo", "font", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "font", obj, ["normal"]);
    this._addCss("Div", "font", obj, ["normal"]);
    this._addCss("Edit", "font", obj, ["normal"]);
    this._addCss("Form", "font", obj, ["normal"]);
    this._addCss("FileUpload", "font", obj, ["normal"]);
    this._addCss("FileDownload", "font", obj, ["normal"]);
    this._addCss(".cell_link", "font", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "font", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "font", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "font", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcheckbox", "font", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcombo", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "font", obj, ["normal"]);
    this._addCss("GroupBox", "font", obj, ["normal"]);
    this._addCss("ListBox", "font", obj, ["normal"]);
    this._addCss("MaskEdit", "font", obj, ["normal"]);
    this._addCss("PopupDiv", "font", obj, ["normal"]);
    this._addCss("PopupMenu", "font", obj, ["normal"]);
    this._addCss("ProgressBar", "font", obj, ["normal"]);
    this._addCss("ProgressBarControl", "font", obj, ["normal"]);
    this._addCss("Radio", "font", obj, ["normal"]);
    this._addCss("Spin", "font", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "font", obj, ["normal"]);
    this._addCss("SpinControl", "font", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "font", obj, ["normal"]);
    this._addCss("Static", "font", obj, ["normal", "mouseover"]);
    this._addCss("TextArea", "font", obj, ["normal"]);
    this._addCss("Button.btn_TF_myinfo", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu", "font", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi", "font", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_POP_PopTitle", "font", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.sta_POP_PopTitle2", "font", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".Cellgrd_WF_sum01", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "font", obj, ["normal"]);
    this._addCss("Button.btn_WF_Module", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_CRUD", "font", obj, ["selected"]);
    this._addCss("Button.btn_BF_Location", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Static.sta_WF_GrdTotal", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_GrdPage", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GID_txt", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GID_txt02", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("");
    this._addCss("MainFrame", "menubarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("MainFrame", "openstatuseffect", obj, ["normal"]);
    this._addCss("ChildFrame", "openstatuseffect", obj, ["normal"]);

    obj = new nexacro.Style_value("31");
    this._addCss("MainFrame", "statusbarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("31");
    this._addCss("MainFrame", "titlebarheight", obj, ["normal"]);

    obj = new nexacro.Style_border("2","solid","#2c4898ff","");
    this._addCss("MainFrame", "border", obj, ["deactivate"]);

    obj = new nexacro.Style_align("left top");
    this._addCss("ChildFrame", "align", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "align", obj, ["normal"]);
    this._addCss("TextArea", "align", obj, ["normal"]);
    this._addCss("Static.sta_MF_title2", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Desc02", "align", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("ChildFrame", "background", obj, ["normal"]);
    this._addCss("Button", "background", obj, ["normal", "mouseover"]);
    this._addCss("Calendar", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "background", obj, ["normal"]);
    this._addCss("Combo", "background", obj, ["normal"]);
    this._addCss("Combo>#combolist", "background", obj, ["normal"]);
    this._addCss("Edit", "background", obj, ["normal"]);
    this._addCss("FileDownload", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controledit", "background", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "background", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["normal", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Grid>#controlcombo>#combolist", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "background", obj, ["normal"]);
    this._addCss("GroupBox", "background", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Tree", "background", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Tree>#body", "background", obj, ["normal"]);
    this._addCss("ImageViewer", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("ListBox", "background", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("MaskEdit", "background", obj, ["normal"]);
    this._addCss("Menu", "background", obj, ["normal"]);
    this._addCss("PopupMenu", "background", obj, ["normal"]);
    this._addCss("ProgressBar", "background", obj, ["normal", "disabled"]);
    this._addCss("ProgressBarControl", "background", obj, ["normal", "disabled"]);
    this._addCss("Spin", "background", obj, ["normal"]);
    this._addCss("SpinControl", "background", obj, ["normal", "mouseover", "focused", "pushed"]);
    this._addCss("Tabpage", "background", obj, ["normal"]);
    this._addCss("TextArea", "background", obj, ["normal"]);
    this._addCss("Tab.tab_TF_menu>Tabpage", "background", obj, ["normal"]);
    this._addCss("Div.div_LF_box02", "background", obj, ["normal"]);
    this._addCss("PopupDiv.pdiv_LF_box01", "background", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_MF_top", "background", obj, ["normal"]);
    this._addCss("Static.sta_MF_bg1", "background", obj, ["normal", "mouseover"]);
    this._addCss("Edit.login", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Button.btn_MF_todotab", "background", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_todotab_S", "background", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_todotab_N", "background", obj, ["enabled", "disabled", "focused", "selected", "normal", "mouseover", "pushed"]);
    this._addCss("Div.div_WF_DetailBg", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_Labelbg", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Labelbg_T", "background", obj, ["normal", "mouseover"]);
    this._addCss("Combo.essential>#combolist", "background", obj, ["normal"]);
    this._addCss("Edit.readonly_P", "background", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("MaskEdit.readonly_P", "background", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("TextArea.readonly_P", "background", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("Calendar.readonly_P", "background", obj, ["normal", "mouseover", "focused", "selected", "disabled", "readonly"]);
    this._addCss("Combo.readonly_P", "background", obj, ["normal", "mouseover", "focused", "selected", "disabled", "readonly"]);
    this._addCss("Div.div_WF_SearchBg", "background", obj, ["normal"]);
    this._addCss("Form.topFrame", "background", obj, ["normal", "disabled", "focused", "mouseover"]);
    this._addCss("Button.btn_MDI_TabCloseS", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_TabS", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("ChildFrame", "border", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "border", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "border", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "border", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "border", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("CheckBox", "border", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "border", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Div", "border", obj, ["normal"]);
    this._addCss("Form", "border", obj, ["normal"]);
    this._addCss("FileUpload", "border", obj, ["normal"]);
    this._addCss("Grid>#body", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "border", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcombo>#comboedit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Menu", "border", obj, ["normal"]);
    this._addCss("PopupDiv", "border", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "border", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "border", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Static", "border", obj, ["normal", "mouseover"]);
    this._addCss("Tab>#extrabutton", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Static.sta_TF_logo", "border", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_TF_home", "border", obj, ["normal", "disabled", "focused", "mouseover", "selected", "pushed"]);
    this._addCss("Button.btn_TF_myinfo", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_set", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_TF_logout", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Tab.tab_TF_menu", "border", obj, ["normal"]);
    this._addCss("Form.frm_LF_Bg", "border", obj, ["normal"]);
    this._addCss("Button.btn_LF_SubMenu", "border", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_Bookmark", "border", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_MenuNm", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu", "border", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar", "border", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar", "border", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar>#trackbar", "border", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar>#trackbar", "border", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar>#trackbar", "border", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar>#trackbar", "border", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Static.sta_LF_text1", "border", obj, ["normal", "mouseover"]);
    this._addCss("Tab.tab_BF_mdi", "border", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_Mdi_Max", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_Mdi_hor", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_Mdi_Close", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_Mdi_ver", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Static.sta_MF_name", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text1", "border", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_MF_top", "border", obj, ["normal"]);
    this._addCss("Div.div_MF_bottom", "border", obj, ["normal"]);
    this._addCss("Static.sta_MF_bg1", "border", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MF_notice", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#body", "border", obj, ["normal", "disabled"]);
    this._addCss("Form.div_remote_bg", "border", obj, ["normal"]);
    this._addCss("Form.frm_pop_Bg", "border", obj, ["normal"]);
    this._addCss("Div.div_PopTitle", "border", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_pop_close", "border", obj, ["normal", "focused", "selected", "pushed", "mouseover", "disabled"]);
    this._addCss("Static.styLog_Text1", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.styLog_Text2", "border", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_MF_text1", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_text2", "border", obj, ["mouseover", "pushed", "focused", "selected", "normal", "disabled"]);
    this._addCss("Button.btn_MF_text3", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_login", "border", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Static.sta_MF_todo", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_info", "border", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_MF_todoNm", "border", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Static.sta_MF_todo1", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_todo2", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_todo3", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_todo4", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_todo5", "border", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_MF_link1", "border", obj, ["normal", "disabled", "selected", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_TF_SearchSmall", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Div.div_WF_GrdBg>Div", "border", obj, ["normal"]);
    this._addCss("Form.frm_pop_Bg2", "border", obj, ["normal"]);
    this._addCss("Edit.edt_WF_Calendaryy", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_WF_CalPrev", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_CalNext", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Calmm", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_Calmm_S", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_ComCal", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Calendar.cal_WF_ComCal>#dropbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Edit.readonly_P", "border", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("MaskEdit.readonly_P", "border", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("TextArea.readonly_P", "border", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("Calendar.readonly_P", "border", obj, ["normal", "mouseover", "focused", "selected", "disabled", "readonly"]);
    this._addCss("Combo.readonly_P", "border", obj, ["normal", "mouseover", "focused", "selected", "disabled", "readonly"]);
    this._addCss("Static.sta_WF_SearchLabel", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_SearchLabel_P", "border", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_Bookmark", "border", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Bookmark_S", "border", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_BF_Location", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_GrdPagePreviousP", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdPagePrevious", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdPageNextP", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdPageNext", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdInitialization", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdSellfixed", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdChange", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdChangeEdit", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdChangeExcel", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdResize", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdSave", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdSort", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdSearch", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdFilter", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdDown", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ListUp", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ListDown", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.styFormTitle", "border", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_FormHelpTitle", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_FormTitle", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Static.sta_POP_Text1", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_ErrorText1", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_ErrorText2", "border", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_Creation", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Process1", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Process2", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Process3", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Process4", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Process5", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Process6", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_T", "border", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btnPrev", "border", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btnNext", "border", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_MdiList", "border", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_ComInit", "border", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_ComSrch", "border", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_ComSave", "border", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_ComNew", "border", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_ComDel", "border", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_ComPrint", "border", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_ComMyMenu", "border", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_Remote", "border", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_ComClose", "border", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_NaviIcon", "border", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_Fold_Open", "border", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_Fold_Close", "border", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_WF_GrdVisibleBtns_A", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdVisibleBtns_N", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_BF_AlertMessage", "border", obj, ["normal", "focused", "disabled"]);
    this._addCss("Button.btn_WF_LeftMenuFA", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Button.btn_TF_UserSetting", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused"]);
    this._addCss("Button.btn_MDI_Home", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("ChildFrame", "statusbarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("ChildFrame", "titlebarheight", obj, ["normal"]);

    obj = new nexacro.Style_background("#1e425aff","","","0","0","0","0","true");
    this._addCss("TitleBarControl", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#1e425aff","","0","none","","");
    this._addCss("TitleBarControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("TitleBarControl", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBar", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBar", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("*>#resizebutton", "bordertype", obj, ["normal"]);
    this._addCss("CheckBox", "bordertype", obj, ["normal"]);
    this._addCss("Edit", "bordertype", obj, ["normal"]);
    this._addCss("Grid", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controledit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Tree", "bordertype", obj, ["normal"]);
    this._addCss("Menu", "bordertype", obj, ["normal"]);
    this._addCss("Radio", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_MF_login", "bordertype", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Edit.login", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_MF_todotab", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_todotab_S", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_TF_SearchSmall", "bordertype", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_MF_todotab_N", "bordertype", obj, ["enabled", "disabled", "focused", "selected", "normal", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Com_G", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Com_B", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Com_R", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Com_N", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Com_C", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_WF_GrdPagePreviousP", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdPagePrevious", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdPageNextP", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdPageNext", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdInitialization", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdSellfixed", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdChange", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdChangeEdit", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdChangeExcel", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdResize", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdSave", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdSort", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdSearch", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdFilter", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdDown", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ListUp", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ListDown", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_WF_Errorbox", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_SearchSmallE", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_WF_MultiSmall", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_WF_CalculatorSmall", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_MDI_TabCloseS", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_TabCloseN", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_TabS", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_TabN", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdVisibleBtns_A", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_GrdVisibleBtns_N", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_BF_AlertMessage", "bordertype", obj, ["normal", "focused", "disabled"]);
    this._addCss("Button.btn_WF_LeftMenuFA", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Button.btn_MDI_Home", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_color("#e6f0f7");
    this._addCss("TitleBarControl", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("9 malgun gothic");
    this._addCss("TitleBarControl", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_SearchText", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("");
    this._addCss("TitleBarControl", "icon", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 10");
    this._addCss("TitleBarControl", "padding", obj, ["normal"]);
    this._addCss("Static.sta_POP_PopTitle2", "padding", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_background("#646871ff","","","0","0","0","0","true");
    this._addCss("TitleBarControl", "background", obj, ["deactivate", "disabled"]);

    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("TitleBarControl>#minbutton", "accessibility", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "accessibility", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "accessibility", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBar", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBarControl", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBar", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBarControl", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "accessibility", obj, ["normal"]);
    this._addCss("*>#resizebutton", "accessibility", obj, ["normal"]);
    this._addCss("Calendar", "accessibility", obj, ["normal"]);
    this._addCss("Combo", "accessibility", obj, ["normal"]);
    this._addCss("Grid", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#head", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#body", "accessibility", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#summary", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#controledit", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "accessibility", obj, ["normal"]);
    this._addCss("Static", "accessibility", obj, ["normal", "mouseover"]);
    this._addCss("Tab>#spinupbutton", "accessibility", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "accessibility", obj, ["normal"]);
    this._addCss("Tabpage", "accessibility", obj, ["normal"]);
    this._addCss("Tab.tab_TF_menu>Tabpage", "accessibility", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "accessibility", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi>Tabpage", "accessibility", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice", "accessibility", obj, ["normal"]);
    this._addCss("Button.btn_WF_ComCal", "accessibility", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);

    obj = new nexacro.Style_align("");
    this._addCss("TitleBarControl>#minbutton", "align", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "align", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "align", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "align", obj, ["normal"]);
    this._addCss("VScrollBar", "align", obj, ["normal"]);
    this._addCss("VScrollBarControl", "align", obj, ["normal"]);
    this._addCss("HScrollBar", "align", obj, ["normal"]);
    this._addCss("HScrollBarControl", "align", obj, ["normal"]);
    this._addCss("*>#resizebutton", "align", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "align", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("Calendar.cal_WF_ComCal>#dropbutton", "align", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_border("0","none","#808080ff","");
    this._addCss("TitleBarControl>#minbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#maxbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#normalbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#closebutton", "border", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("TitleBarControl>#minbutton", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "bordertype", obj, ["mouseover", "pushed", "disabled"]);
    this._addCss("Button", "bordertype", obj, ["normal"]);
    this._addCss("Calendar", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "bordertype", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Combo", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#combolist", "bordertype", obj, ["normal"]);
    this._addCss("Div", "bordertype", obj, ["normal"]);
    this._addCss("Form", "bordertype", obj, ["normal"]);
    this._addCss("FileUpload", "bordertype", obj, ["normal"]);
    this._addCss("FileDownload", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "bordertype", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcheckbox", "bordertype", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcombo", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "bordertype", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("GroupBox", "bordertype", obj, ["normal"]);
    this._addCss("ImageViewer", "bordertype", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("ListBox", "bordertype", obj, ["normal"]);
    this._addCss("MaskEdit", "bordertype", obj, ["normal"]);
    this._addCss("PopupDiv", "bordertype", obj, ["normal"]);
    this._addCss("PopupMenu", "bordertype", obj, ["normal"]);
    this._addCss("ProgressBar", "bordertype", obj, ["normal"]);
    this._addCss("ProgressBarControl", "bordertype", obj, ["normal"]);
    this._addCss("Spin", "bordertype", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("SpinControl", "bordertype", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Static", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Tab", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Tab>#extrabutton", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("TextArea", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_TF_home", "bordertype", obj, ["normal", "disabled", "focused", "mouseover", "selected", "pushed"]);
    this._addCss("Button.btn_TF_myinfo", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_set", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_TF_logout", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Tab.tab_TF_menu", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_LF_SubMenu", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_Bookmark", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_LF_text1", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Tab.tab_BF_mdi", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_name", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text1", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_bg1", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MF_notice>#body", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_MF_text1", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_text2", "bordertype", obj, ["mouseover", "pushed", "focused", "selected", "normal", "disabled"]);
    this._addCss("Button.btn_MF_text3", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_link1", "bordertype", obj, ["normal", "disabled", "selected", "focused", "mouseover", "pushed"]);
    this._addCss("Calendar.cal_WF_ComCal>#dropbutton", "bordertype", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Combo.essential>#combolist", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_BF_Location", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_FormHelpTitle", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_FormTitle", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_color("");
    this._addCss("TitleBarControl>#minbutton", "color", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "color", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "color", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "color", obj, ["normal"]);
    this._addCss("VScrollBar", "color", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "color", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "color", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "color", obj, ["normal"]);
    this._addCss("VScrollBarControl", "color", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "color", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "color", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "color", obj, ["normal"]);
    this._addCss("HScrollBar", "color", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "color", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "color", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "color", obj, ["normal"]);
    this._addCss("HScrollBarControl", "color", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "color", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "color", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "color", obj, ["normal"]);
    this._addCss("*>#resizebutton", "color", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "color", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "color", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "color", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "color", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("TitleBarControl>#minbutton", "cursor", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "cursor", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "cursor", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "cursor", obj, ["normal"]);
    this._addCss("VScrollBar", "cursor", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "cursor", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "cursor", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "cursor", obj, ["normal"]);
    this._addCss("VScrollBarControl", "cursor", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "cursor", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "cursor", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "cursor", obj, ["normal"]);
    this._addCss("HScrollBar", "cursor", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "cursor", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "cursor", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "cursor", obj, ["normal"]);
    this._addCss("HScrollBarControl", "cursor", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "cursor", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "cursor", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "cursor", obj, ["normal"]);
    this._addCss("*>#resizebutton", "cursor", obj, ["normal"]);
    this._addCss("Grid", "cursor", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controledit", "cursor", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "cursor", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "cursor", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("Tabpage", "cursor", obj, ["normal"]);
    this._addCss("Tab.tab_TF_menu>Tabpage", "cursor", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi>Tabpage", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("TitleBarControl>#minbutton", "font", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "font", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "font", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "font", obj, ["normal"]);
    this._addCss("VScrollBar", "font", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "font", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "font", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "font", obj, ["normal"]);
    this._addCss("VScrollBarControl", "font", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "font", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "font", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "font", obj, ["normal"]);
    this._addCss("HScrollBar", "font", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "font", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "font", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "font", obj, ["normal"]);
    this._addCss("HScrollBarControl", "font", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "font", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "font", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "font", obj, ["normal"]);
    this._addCss("*>#resizebutton", "font", obj, ["normal"]);
    this._addCss("Grid", "font", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controledit", "font", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "font", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "font", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "font", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "font", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("TitleBarControl>#minbutton", "gradation", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "gradation", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "gradation", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "gradation", obj, ["normal"]);
    this._addCss("VScrollBar", "gradation", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "gradation", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "gradation", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "gradation", obj, ["normal"]);
    this._addCss("VScrollBarControl", "gradation", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "gradation", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "gradation", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "gradation", obj, ["normal"]);
    this._addCss("HScrollBar", "gradation", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "gradation", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "gradation", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "gradation", obj, ["normal"]);
    this._addCss("HScrollBarControl", "gradation", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "gradation", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "gradation", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "gradation", obj, ["normal"]);
    this._addCss("*>#resizebutton", "gradation", obj, ["normal"]);
    this._addCss("Grid", "gradation", obj, ["normal"]);
    this._addCss("Grid>#body", "gradation", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "gradation", obj, ["normal"]);
    this._addCss("Grid>#summary", "gradation", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controledit", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "gradation", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "gradation", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "gradation", obj, ["normal"]);
    this._addCss("Menu", "gradation", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "gradation", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "gradation", obj, ["normal"]);
    this._addCss("Tabpage", "gradation", obj, ["normal"]);
    this._addCss("Tab.tab_TF_menu>Tabpage", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "gradation", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi>Tabpage", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_Titlebar_min.png");
    this._addCss("TitleBarControl>#minbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("TitleBarControl>#minbutton", "imagealign", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "imagealign", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "imagealign", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "imagealign", obj, ["normal"]);
    this._addCss("*>#resizebutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "imagealign", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("TitleBarControl>#minbutton", "opacity", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "opacity", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "opacity", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "opacity", obj, ["normal"]);
    this._addCss("VScrollBar", "opacity", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "opacity", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "opacity", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "opacity", obj, ["normal"]);
    this._addCss("VScrollBarControl", "opacity", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "opacity", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "opacity", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "opacity", obj, ["normal"]);
    this._addCss("HScrollBar", "opacity", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "opacity", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "opacity", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "opacity", obj, ["normal"]);
    this._addCss("HScrollBarControl", "opacity", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "opacity", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "opacity", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "opacity", obj, ["normal"]);
    this._addCss("*>#resizebutton", "opacity", obj, ["normal"]);
    this._addCss("Grid", "opacity", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controledit", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "opacity", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "opacity", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "opacity", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "opacity", obj, ["normal"]);
    this._addCss("Tabpage", "opacity", obj, ["normal"]);
    this._addCss("Tab.tab_TF_menu>Tabpage", "opacity", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "opacity", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi>Tabpage", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("TitleBarControl>#minbutton", "padding", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "padding", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "padding", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "padding", obj, ["normal"]);
    this._addCss("VScrollBar", "padding", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "padding", obj, ["normal"]);
    this._addCss("VScrollBarControl", "padding", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "padding", obj, ["normal"]);
    this._addCss("HScrollBar", "padding", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "padding", obj, ["normal"]);
    this._addCss("HScrollBarControl", "padding", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "padding", obj, ["normal"]);
    this._addCss("*>#resizebutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "padding", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "padding", obj, ["normal"]);
    this._addCss("Menu", "padding", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "padding", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "padding", obj, ["normal"]);
    this._addCss("Tabpage", "padding", obj, ["normal"]);
    this._addCss("Tab.tab_TF_menu>Tabpage", "padding", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi>Tabpage", "padding", obj, ["normal"]);

    obj = new nexacro.Style_shadow("");
    this._addCss("TitleBarControl>#minbutton", "shadow", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "shadow", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "shadow", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "shadow", obj, ["normal"]);
    this._addCss("VScrollBar", "shadow", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "shadow", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "shadow", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "shadow", obj, ["normal"]);
    this._addCss("VScrollBarControl", "shadow", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "shadow", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "shadow", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "shadow", obj, ["normal"]);
    this._addCss("HScrollBar", "shadow", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "shadow", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "shadow", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "shadow", obj, ["normal"]);
    this._addCss("HScrollBarControl", "shadow", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "shadow", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "shadow", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "shadow", obj, ["normal"]);
    this._addCss("*>#resizebutton", "shadow", obj, ["normal"]);
    this._addCss("Grid", "shadow", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controledit", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "shadow", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "shadow", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "shadow", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "shadow", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "shadow", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_Titlebar_min_O.png");
    this._addCss("TitleBarControl>#minbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_Titlebar_min_P.png");
    this._addCss("TitleBarControl>#minbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_Titlebar_max.png");
    this._addCss("TitleBarControl>#maxbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_Titlebar_max_O.png");
    this._addCss("TitleBarControl>#maxbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_Titlebar_max_P.png");
    this._addCss("TitleBarControl>#maxbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_Titlebar_normal.png");
    this._addCss("TitleBarControl>#normalbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_Titlebar_normal_O.png");
    this._addCss("TitleBarControl>#normalbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_Titlebar_normal_P.png");
    this._addCss("TitleBarControl>#normalbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_close.png')");
    this._addCss("TitleBarControl>#closebutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_close_O.png')");
    this._addCss("TitleBarControl>#closebutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_close_P.png')");
    this._addCss("TitleBarControl>#closebutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("VScrollBar", "background", obj, ["normal", "disabled"]);
    this._addCss("VScrollBarControl", "background", obj, ["normal", "disabled"]);
    this._addCss("HScrollBar", "background", obj, ["normal", "disabled"]);
    this._addCss("HScrollBarControl", "background", obj, ["normal", "disabled"]);
    this._addCss("*>#resizebutton", "background", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "background", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_Errorbox", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("45");
    this._addCss("VScrollBar", "barminsize", obj, ["normal"]);
    this._addCss("VScrollBarControl", "barminsize", obj, ["normal"]);
    this._addCss("HScrollBar", "barminsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "barminsize", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar", "barminsize", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar", "baroutsize", obj, ["normal"]);
    this._addCss("VScrollBarControl", "baroutsize", obj, ["normal"]);
    this._addCss("HScrollBar", "baroutsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "baroutsize", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "baroutsize", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#c9c9c9ff","");
    this._addCss("VScrollBar", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("14");
    this._addCss("VScrollBar", "decbtnsize", obj, ["normal"]);
    this._addCss("VScrollBarControl", "decbtnsize", obj, ["normal"]);
    this._addCss("HScrollBar", "decbtnsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "decbtnsize", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar", "imgoutsize", obj, ["normal"]);
    this._addCss("VScrollBarControl", "imgoutsize", obj, ["normal"]);
    this._addCss("HScrollBar", "imgoutsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "imgoutsize", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "imgoutsize", obj, ["normal"]);

    obj = new nexacro.Style_value("14");
    this._addCss("VScrollBar", "incbtnsize", obj, ["normal"]);
    this._addCss("VScrollBarControl", "incbtnsize", obj, ["normal"]);
    this._addCss("HScrollBar", "incbtnsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "incbtnsize", obj, ["normal"]);

    obj = new nexacro.Style_value("14");
    this._addCss("VScrollBar", "scrollbarsize", obj, ["normal"]);
    this._addCss("VScrollBarControl", "scrollbarsize", obj, ["normal"]);
    this._addCss("HScrollBar", "scrollbarsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "scrollbarsize", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar", "trackbarsize", obj, ["normal"]);
    this._addCss("VScrollBarControl", "trackbarsize", obj, ["normal"]);
    this._addCss("HScrollBar", "trackbarsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "trackbarsize", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "trackbarsize", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#cfcfcfff","");
    this._addCss("VScrollBar", "border", obj, ["disabled"]);
    this._addCss("VScrollBarControl", "border", obj, ["disabled"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("VScrollBar>#incbutton", "align", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "align", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "align", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "align", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "align", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "align", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "align", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "align", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "align", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "align", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "align", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "align", obj, ["normal"]);
    this._addCss("Button", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "align", obj, ["normal"]);
    this._addCss("FileDownload", "align", obj, ["normal"]);
    this._addCss("Grid", "align", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "align", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "align", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "align", obj, ["normal"]);
    this._addCss("ImageViewer", "align", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("ProgressBar", "align", obj, ["normal"]);
    this._addCss("ProgressBarControl", "align", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "align", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Tab.tab_TF_menu", "align", obj, ["normal"]);
    this._addCss("Button.btn_LF_MenuNm", "align", obj, ["normal"]);
    this._addCss(".cell_dday", "align", obj, ["normal"]);
    this._addCss("Static.styLog_Text1", "align", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_MF_todoNm", "align", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Button.btn_MF_todotab", "align", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_todotab_S", "align", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Static.sta_MF_todo1", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_todo2", "align", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_MF_todotab_N", "align", obj, ["enabled", "disabled", "focused", "selected", "normal", "mouseover", "pushed"]);
    this._addCss("Static.sta_WF_Label_C", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_CT", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_CB", "align", obj, ["normal", "mouseover"]);
    this._addCss("Edit.edt_WF_Calendaryy", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ComCal", "align", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Static.sta_WF_GrdPage", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_GrdPageS", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GID_Title", "align", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vinc_N.png')");
    this._addCss("VScrollBar>#incbutton", "image", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("cetner middle");
    this._addCss("VScrollBar>#incbutton", "imagealign", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "imagealign", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "imagealign", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "imagealign", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("VScrollBar>#incbutton", "padding", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "padding", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "padding", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "padding", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "padding", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "padding", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "padding", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "padding", obj, ["normal"]);
    this._addCss("Calendar", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "padding", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("Button.btn_TF_myinfo", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu", "padding", obj, ["normal"]);
    this._addCss("Button.btn_Mdi_Max", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_Mdi_hor", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_Mdi_Close", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_Mdi_ver", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid.grd_MF_notice", "padding", obj, ["normal"]);
    this._addCss("Static.styLog_Text1", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.styLog_Text2", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_info", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_todo1", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Edit.edt_WF_Calendaryy", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_WF_CalPrev", "padding", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_CalNext", "padding", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Bookmark", "padding", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Bookmark_S", "padding", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Static.sta_WF_ErrorText1", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_ErrorText2", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_T", "padding", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_menu", "padding", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btnPrev", "padding", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btnNext", "padding", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_MdiList", "padding", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_ComInit", "padding", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_ComSrch", "padding", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_ComSave", "padding", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_ComNew", "padding", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_ComDel", "padding", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_ComPrint", "padding", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_ComMyMenu", "padding", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_Remote", "padding", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_ComClose", "padding", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_NaviIcon", "padding", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_Fold_Open", "padding", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_Fold_Close", "padding", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("VScrollBar>#incbutton", "background", obj, ["mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#head", "background", obj, ["normal"]);
    this._addCss("Static.sta_MDI_Bg", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_ProcessBullet", "background", obj, ["normal", "disabled", "selected", "mouseover", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ddddd6 100,0 #aeaea8");
    this._addCss("VScrollBar>#incbutton", "gradation", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#a8a8a2ff","");
    this._addCss("VScrollBar>#incbutton", "border", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vinc_O.png')");
    this._addCss("VScrollBar>#incbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f5f5f3 100,0 #e5e5df");
    this._addCss("VScrollBar>#incbutton", "gradation", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#cacac5ff","");
    this._addCss("VScrollBar>#incbutton", "border", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vinc_D.png')");
    this._addCss("VScrollBar>#incbutton", "image", obj, ["disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vdec_N.png')");
    this._addCss("VScrollBar>#decbutton", "image", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vdec_O.png')");
    this._addCss("VScrollBar>#decbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vdec_D.png')");
    this._addCss("VScrollBar>#decbutton", "image", obj, ["disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("#d4d4d4ff","","","0","0","0","0","true");
    this._addCss("VScrollBar>#trackbar", "background", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("2","double","#f7f7f7ff","#b2b6bfff");
    this._addCss("VScrollBar>#trackbar", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar>#trackbar", "image", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "image", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "image", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "image", obj, ["normal"]);
    this._addCss("*>#resizebutton", "image", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "image", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "image", obj, ["normal"]);
    this._addCss("Button.btn_WF_Calmm", "image", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_Calmm_S", "image", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Calendar.readonly_P>#dropbutton", "image", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Combo.readonly_P>#dropbutton", "image", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Combo.readonly_C>#dropbutton", "image", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_FormTitle", "image", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_LeftMenuFA", "image", obj, ["disabled"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("VScrollBar>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "imagealign", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "imagealign", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_home", "imagealign", obj, ["normal", "disabled", "focused", "mouseover", "selected", "pushed"]);
    this._addCss("Button.btn_LF_SubMenu", "imagealign", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_LF_Bookmark", "imagealign", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar>#trackbar", "imagealign", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar>#trackbar", "imagealign", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar>#trackbar", "imagealign", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar>#trackbar", "imagealign", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_CalPrev", "imagealign", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_CalNext", "imagealign", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ComCal", "imagealign", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Calendar.cal_WF_ComCal>#dropbutton", "imagealign", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Search", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR2", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL2", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleU", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleD", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_LeftMenuFA", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_background("#a4a4a4ff","","","0","0","0","0","true");
    this._addCss("VScrollBar>#trackbar", "background", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("HScrollBar>#trackbar", "background", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_border("2","double","#f7f7f7ff","#888c95ff");
    this._addCss("VScrollBar>#trackbar", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("HScrollBar>#trackbar", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "border", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("#dededeff","","","0","0","0","0","true");
    this._addCss("VScrollBar>#trackbar", "background", obj, ["disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["disabled"]);
    this._addCss("HScrollBar>#trackbar", "background", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["disabled"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#dededeff","");
    this._addCss("VScrollBar>#trackbar", "border", obj, ["disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["disabled"]);
    this._addCss("HScrollBar>#trackbar", "border", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["disabled"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "border", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#c9c9c9ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("HScrollBar", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#cfcfcfff","","0","none","","","0","none","","","0","none","","");
    this._addCss("HScrollBar", "border", obj, ["disabled"]);
    this._addCss("HScrollBarControl", "border", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hinc_N.png')");
    this._addCss("HScrollBar>#incbutton", "image", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hinc_O.png')");
    this._addCss("HScrollBar>#incbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hinc_D.png')");
    this._addCss("HScrollBar>#incbutton", "image", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hdec_N.png')");
    this._addCss("HScrollBar>#decbutton", "image", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hdec_O.png')");
    this._addCss("HScrollBar>#decbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hdec_D.png')");
    this._addCss("HScrollBar>#decbutton", "image", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#c9c9c9ff","","0","none","","","0","none","","","1","solid","#c2c2c2ff","");
    this._addCss("HScrollBarControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#c9c9c9ff","","0","none","","","0","none","","","1","solid","#c9c9c9ff","");
    this._addCss("*>#resizebutton", "border", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","");
    this._addCss("Button", "border", obj, ["normal", "disabled"]);
    this._addCss("Calendar", "border", obj, ["normal", "disabled", "readonly"]);
    this._addCss("Combo", "border", obj, ["normal", "disabled", "readonly"]);
    this._addCss("Edit", "border", obj, ["normal", "disabled", "readonly"]);
    this._addCss("FileDownload", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controledit", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlbutton", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["normal", "disabled"]);
    this._addCss("ImageViewer", "border", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("ListBox", "border", obj, ["normal", "disabled"]);
    this._addCss("MaskEdit", "border", obj, ["normal", "disabled", "readonly"]);
    this._addCss("PopupMenu", "border", obj, ["normal"]);
    this._addCss("Spin", "border", obj, ["normal", "disabled", "readonly"]);
    this._addCss("SpinControl", "border", obj, ["normal", "disabled", "readonly"]);
    this._addCss("TextArea", "border", obj, ["normal", "disabled", "readonly"]);
    this._addCss("Edit.login", "border", obj, ["disabled", "readonly"]);
    this._addCss("Edit.readonly", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.readonly", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.readonly", "border", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "border", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Spin.readonly", "border", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Combo.readonly_C", "border", obj, ["normal", "mouseover", "focused", "selected", "disabled", "readonly"]);
    this._addCss("Button.btn_WF_Module", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "border", obj, ["disabled"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Button", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "cursor", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Combo>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss(".cell_link", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "cursor", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Tab.tab_TF_menu", "cursor", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice", "cursor", obj, ["normal"]);
    this._addCss("Static.sta_MF_todo2", "cursor", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_todo4", "cursor", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_title2", "cursor", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_TF_SearchSmall", "cursor", obj, ["normal", "focused", "selected"]);
    this._addCss("Calendar.cal_WF_ComCal>#dropbutton", "cursor", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_SearchSmall", "cursor", obj, ["normal"]);
    this._addCss("Static.sta_WF_GrdPage", "cursor", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_GrdPageS", "cursor", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_SearchSmallE", "cursor", obj, ["normal"]);
    this._addCss("Button.btn_WF_MultiSmall", "cursor", obj, ["normal"]);
    this._addCss("Button.btn_WF_CalculatorSmall", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 0 0 0");
    this._addCss("Button", "padding", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "padding", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("FileDownload", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "padding", obj, ["normal"]);
    this._addCss("Static", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_ComCal", "padding", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);
    this._addCss("Calendar.cal_WF_ComCal>#dropbutton", "padding", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Button.btn_BF_Location", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Static.sta_WF_Subtitle03", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#6883a4ff","");
    this._addCss("Button", "border", obj, ["mouseover"]);
    this._addCss("Calendar", "border", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Combo", "border", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Combo>#combolist", "border", obj, ["normal"]);
    this._addCss("Edit", "border", obj, ["mouseover", "focused"]);
    this._addCss("FileDownload", "border", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controledit", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlbutton", "border", obj, ["mouseover"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["mouseover", "focused", "selected", "pushed"]);
    this._addCss("Grid>#controlcombo>#combolist", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["mouseover", "selected", "focused"]);
    this._addCss("ListBox", "border", obj, ["mouseover", "selected", "focused"]);
    this._addCss("MaskEdit", "border", obj, ["mouseover", "focused"]);
    this._addCss("Spin", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("SpinControl", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("TextArea", "border", obj, ["mouseover", "focused"]);
    this._addCss("Button.btn_WF_SearchSmall", "border", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_bordertype("round","0","0","true","true","true","true");
    this._addCss("Button", "bordertype", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_Module", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_CRUD", "bordertype", obj, ["selected"]);

    obj = new nexacro.Style_color("#31498d");
    this._addCss("Button", "color", obj, ["mouseover"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#849accff","","","0","0","0","0","true");
    this._addCss("Button", "background", obj, ["pushed", "focused", "selected"]);
    this._addCss("Grid>#controlbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_border("1","solid","#637bb2ff","");
    this._addCss("Button", "border", obj, ["pushed", "focused", "selected"]);
    this._addCss("Grid>#controlbutton", "border", obj, ["pushed"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Button", "color", obj, ["pushed", "focused", "selected"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "color", obj, ["normal"]);
    this._addCss("FileDownload", "color", obj, ["focused"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "color", obj, ["normal"]);
    this._addCss("ListBox", "color", obj, ["selected", "focused"]);
    this._addCss("PopupMenu", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_LF_MenuNm", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss(".cell_dday", "color", obj, ["normal"]);
    this._addCss("Div.div_PopTitle", "color", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_MF_login", "color", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Button.btn_MF_todoNm", "color", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Static.sta_MF_todo4", "color", obj, ["normal"]);
    this._addCss("Button.btn_MF_link1", "color", obj, ["normal", "disabled", "selected", "focused"]);
    this._addCss("Static.sta_POP_PopTitle", "color", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Edit.edt_WF_Calendaryy", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Calmm_S", "color", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_Com_G", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Com_B", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Com_R", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Module", "color", obj, ["pushed", "focused"]);
    this._addCss("Button.btn_WF_CRUD", "color", obj, ["selected"]);
    this._addCss("Static.sta_WF_OrderCount", "color", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WF_Creation", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ProcessCount", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_WF_SearchText", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#f4f4f4ff","","","0","0","0","0","true");
    this._addCss("Button", "background", obj, ["disabled"]);
    this._addCss("Calendar", "background", obj, ["disabled", "readonly"]);
    this._addCss("Combo", "background", obj, ["disabled", "readonly"]);
    this._addCss("Edit", "background", obj, ["disabled", "readonly"]);
    this._addCss("FileDownload", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlbutton", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["disabled"]);
    this._addCss("ListBox", "background", obj, ["disabled"]);
    this._addCss("MaskEdit", "background", obj, ["disabled", "readonly"]);
    this._addCss("Spin", "background", obj, ["disabled", "readonly"]);
    this._addCss("SpinControl", "background", obj, ["disabled", "readonly"]);
    this._addCss("TextArea", "background", obj, ["disabled", "readonly"]);
    this._addCss("Edit.login", "background", obj, ["disabled", "readonly"]);
    this._addCss("Edit.essential", "background", obj, ["disabled"]);
    this._addCss("MaskEdit.essential", "background", obj, ["disabled"]);
    this._addCss("TextArea.essential", "background", obj, ["disabled"]);
    this._addCss("Combo.essential", "background", obj, ["disabled"]);
    this._addCss("Calendar.essential", "background", obj, ["disabled"]);
    this._addCss("Spin.essential", "background", obj, ["disabled"]);
    this._addCss("Edit.readonly", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.readonly", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.readonly", "background", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "background", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Spin.readonly", "background", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Combo.readonly_C", "background", obj, ["normal", "mouseover", "focused", "selected", "disabled", "readonly"]);
    this._addCss("Button.btn_WF_Module", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleR2", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleL2", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleU", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleD", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#aeaeae");
    this._addCss("Button", "color", obj, ["disabled"]);
    this._addCss("Calendar", "color", obj, ["disabled"]);
    this._addCss("Calendar>#calendaredit", "color", obj, ["disabled"]);
    this._addCss("Combo", "color", obj, ["disabled"]);
    this._addCss("Combo>#comboedit", "color", obj, ["disabled"]);
    this._addCss("Edit", "color", obj, ["disabled"]);
    this._addCss("FileDownload", "color", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcheckbox", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "color", obj, ["disabled"]);
    this._addCss("ListBox", "color", obj, ["disabled"]);
    this._addCss("MaskEdit", "color", obj, ["disabled"]);
    this._addCss("PopupMenu", "color", obj, ["disabled"]);
    this._addCss("Spin", "color", obj, ["disabled"]);
    this._addCss("SpinControl", "color", obj, ["disabled"]);
    this._addCss("Static", "color", obj, ["disabled"]);
    this._addCss("TextArea", "color", obj, ["disabled"]);
    this._addCss("Edit.login", "color", obj, ["disabled", "readonly"]);
    this._addCss("Button.btn_WF_Module", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("23");
    this._addCss("Calendar", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_value("auto");
    this._addCss("Calendar", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "cursor", obj, ["normal"]);
    this._addCss("CheckBox", "cursor", obj, ["normal"]);
    this._addCss("Combo", "cursor", obj, ["normal"]);
    this._addCss("Edit", "cursor", obj, ["normal"]);
    this._addCss("Form", "cursor", obj, ["normal"]);
    this._addCss("FileUpload", "cursor", obj, ["normal"]);
    this._addCss("FileDownload", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "cursor", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcombo", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "cursor", obj, ["normal"]);
    this._addCss("ListBox", "cursor", obj, ["normal"]);
    this._addCss("MaskEdit", "cursor", obj, ["normal"]);
    this._addCss("Menu", "cursor", obj, ["normal"]);
    this._addCss("PopupDiv", "cursor", obj, ["normal"]);
    this._addCss("PopupMenu", "cursor", obj, ["normal"]);
    this._addCss("Radio", "cursor", obj, ["normal"]);
    this._addCss("Spin", "cursor", obj, ["normal"]);
    this._addCss("SpinControl", "cursor", obj, ["normal"]);
    this._addCss("Static", "cursor", obj, ["normal", "mouseover"]);
    this._addCss("Tab", "cursor", obj, ["normal", "disabled"]);
    this._addCss("TextArea", "cursor", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "cursor", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi", "cursor", obj, ["normal", "disabled"]);
    this._addCss("Edit.login", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "daybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ffffffff","");
    this._addCss("Calendar", "dayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "dayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar", "daybordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "daybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daybordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Calendar", "daycolor", obj, ["normal", "mouseover"]);
    this._addCss("Calendar>#popupcalendar", "daycolor", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daycolor", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("9 Tahoma");
    this._addCss("Calendar", "dayfont", obj, ["normal", "mouseover"]);
    this._addCss("Calendar>#popupcalendar", "dayfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "dayfont", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "dayfont", obj, ["normal"]);

    obj = new nexacro.Style_value("30 30");
    this._addCss("Calendar", "daysize", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "daysize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daysize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daysize", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar", "popupbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupbackground", obj, ["normal"]);
    this._addCss("Menu", "popupbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#646871ff","");
    this._addCss("Calendar", "popupborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar", "popupbordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupbordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("212 240");
    this._addCss("Calendar", "popupsize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupsize", obj, ["normal"]);

    obj = new nexacro.Style_background("#ece8e7ff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["mouseover"]);
    this._addCss("Calendar>#popupcalendar", "daybackground", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar", "dayborder", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Calendar>#popupcalendar", "dayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "dayborder", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "dayborder", obj, ["normal"]);

    obj = new nexacro.Style_background("#f15b47ff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["selected", "focused"]);
    this._addCss("Calendar>#popupcalendar", "daybackground", obj, ["selected"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daybackground", obj, ["selected"]);

    obj = new nexacro.Style_font("bold 9 Tahoma");
    this._addCss("Calendar", "dayfont", obj, ["selected", "focused"]);
    this._addCss("Grid>#controlcalendar", "dayfont", obj, ["selected", "focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar", "daycolor", obj, ["selected", "focused"]);
    this._addCss("Calendar>#popupcalendar", "daycolor", obj, ["selected"]);
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daycolor", obj, ["selected"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("Calendar>#calendaredit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("#4a95e7");
    this._addCss("Calendar>#calendaredit", "selectbackground", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "selectbackground", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "selectbackground", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "selectbackground", obj, ["normal"]);
    this._addCss("Edit.login", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#calendaredit", "selectcolor", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "selectcolor", obj, ["normal"]);
    this._addCss("Edit", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "selectcolor", obj, ["normal"]);
    this._addCss("MaskEdit", "selectcolor", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "selectcolor", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "selectcolor", obj, ["normal"]);
    this._addCss("TextArea", "selectcolor", obj, ["normal"]);
    this._addCss(".cell_dday", "selectcolor", obj, ["normal"]);
    this._addCss("Edit.login", "selectcolor", obj, ["normal"]);
    this._addCss("Combo.essential>#combolist", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_CalDrop_N.png')");
    this._addCss("Calendar>#dropbutton", "image", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ComCal", "image", obj, ["normal", "focused", "selected", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_CalDrop_D.png')");
    this._addCss("Calendar>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ComCal", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spinup_N.png')");
    this._addCss("Calendar>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Spin.essential>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spinup_O.png')");
    this._addCss("Calendar>#spinupbutton", "image", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["mouseover"]);
    this._addCss("Spin>#spinupbutton", "image", obj, ["mouseover"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["mouseover"]);
    this._addCss("Spin.essential>#spinupbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spinup_P.png')");
    this._addCss("Calendar>#spinupbutton", "image", obj, ["pushed"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["pushed"]);
    this._addCss("Spin>#spinupbutton", "image", obj, ["pushed"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["pushed"]);
    this._addCss("Spin.essential>#spinupbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spinup_D.png')");
    this._addCss("Calendar>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Spin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spindown_N.png')");
    this._addCss("Calendar>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Spin.essential>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spindown_O.png')");
    this._addCss("Calendar>#spindownbutton", "image", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["mouseover"]);
    this._addCss("Spin.essential>#spindownbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spindown_P.png')");
    this._addCss("Calendar>#spindownbutton", "image", obj, ["pushed"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["pushed"]);
    this._addCss("Spin.essential>#spindownbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spindown_D.png')");
    this._addCss("Calendar>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#756c6bff","");
    this._addCss("Calendar>#popupcalendar", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "border", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Tahoma");
    this._addCss("Calendar>#popupcalendar", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("33 0 0 0");
    this._addCss("Calendar>#popupcalendar", "ncpadding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "ncpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("yyyy.MM");
    this._addCss("Calendar>#popupcalendar", "headerformat", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerformat", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Calendar>#popupcalendar", "weekformat", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekformat", obj, ["normal"]);

    obj = new nexacro.Style_value("33");
    this._addCss("Calendar>#popupcalendar", "headerheight", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerheight", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#popupcalendar", "headercolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headercolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#646871ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "headerbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "headerborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "headerbordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerbordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 11 Tahoma");
    this._addCss("Calendar>#popupcalendar", "headerfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "bodybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "bodyborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodyborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "bodybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodybordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#popupcalendar", "weekcolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#646871ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "weekbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekbackground", obj, ["normal"]);

    obj = new nexacro.Style_font("8 Dotum");
    this._addCss("Calendar>#popupcalendar", "weekfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#popupcalendar", "todaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#579ee7ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "todaybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "todayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "todaybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Tahoma");
    this._addCss("Calendar>#popupcalendar", "todayfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todayfont", obj, ["normal"]);

    obj = new nexacro.Style_value("true");
    this._addCss("Calendar>#popupcalendar", "usetrailingday", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "usetrailingday", obj, ["normal"]);

    obj = new nexacro.Style_color("#bebebe");
    this._addCss("Calendar>#popupcalendar", "trailingdaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "trailingdaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "saturdayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Tahoma");
    this._addCss("Calendar>#popupcalendar", "saturdayfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdayfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#5f9dde");
    this._addCss("Calendar>#popupcalendar", "saturdaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "sundaybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "sundayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "sundaybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#ee6b67");
    this._addCss("Calendar>#popupcalendar", "sundaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaycolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Tahoma");
    this._addCss("Calendar>#popupcalendar", "sundayfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundayfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#ece8e7ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybackground", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#ece8e7ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "sundaybackground", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#f15b47ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybackground", obj, ["selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybackground", obj, ["selected"]);

    obj = new nexacro.Style_background("#f15b47ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "sundaybackground", obj, ["selected"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybackground", obj, ["selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_prev_N.png')");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["normal"]);
    this._addCss("Button.btn_WF_CalPrev", "image", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_prev_O.png')");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_WF_CalPrev", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_prev_D.png')");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_CalPrev", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_next_N.png')");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["normal"]);
    this._addCss("Button.btn_WF_CalNext", "image", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_next_O.png')");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_WF_CalNext", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_next_D.png')");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_CalNext", "image", obj, ["disabled"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("Calendar>#popupcalendar>#yearspin", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "align", obj, ["normal"]);
    this._addCss("MaskEdit", "align", obj, ["normal"]);
    this._addCss("Spin", "align", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "align", obj, ["normal"]);
    this._addCss("SpinControl", "align", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "align", obj, ["normal"]);
    this._addCss("Button.btn_TF_myinfo", "align", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Static.sta_MF_todo4", "align", obj, ["normal", "mouseover"]);
    this._addCss(".Cellgrd_WF_sum01", "align", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "align", obj, ["normal"]);
    this._addCss(".cell_right", "align", obj, ["normal"]);
    this._addCss("Button.btn_BF_Location", "align", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Static.sta_WF_OrderCount", "align", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#ffffffff","");
    this._addCss("Calendar>#popupcalendar>#yearspin", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("center middle");
    this._addCss("Calendar>#popupcalendar>#yearspin", "buttonalign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "buttonalign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "buttonalign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_value("8");
    this._addCss("Calendar>#popupcalendar>#yearspin", "buttonsize", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 11 Tahoma");
    this._addCss("Calendar>#popupcalendar>#yearspin", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "font", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#49a0ffff","");
    this._addCss("Calendar>#popupcalendar>#yearspin", "border", obj, ["mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "border", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_border("1","solid","#918b89ff","");
    this._addCss("Calendar>#popupcalendar>#yearspin", "border", obj, ["disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#918b89");
    this._addCss("Calendar>#popupcalendar>#yearspin", "color", obj, ["disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Calspinup_N.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Calspinup_O.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Calspinup_D.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Calspindown_N.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Calspindown_O.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Calspindown_D.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("CheckBox", "buttonalign", obj, ["normal"]);
    this._addCss("Radio", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/img_WF_CheckBox.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["normal", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("CheckBox", "buttonborder", obj, ["normal"]);
    this._addCss("Tab", "buttonborder", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("CheckBox", "buttonbordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_Check.png')");
    this._addCss("CheckBox", "buttonimage", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlcheckbox", "buttonimage", obj, ["normal", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("14");
    this._addCss("CheckBox", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "buttonsize", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Radio", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 5");
    this._addCss("CheckBox", "textpadding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/img_WF_CheckBox_D.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["readonly"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_padding("1 0 0 5");
    this._addCss("Combo", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("20");
    this._addCss("Combo", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "buttonsize", obj, ["normal"]);
    this._addCss("Spin", "buttonsize", obj, ["normal"]);
    this._addCss("SpinControl", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Combo", "itembackground", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itembackground", obj, ["normal", "mouseover"]);
    this._addCss("ListBox", "itembackground", obj, ["normal"]);
    this._addCss("Menu", "itembackground", obj, ["normal"]);
    this._addCss("PopupMenu", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Combo", "itemborder", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itemborder", obj, ["normal"]);
    this._addCss("ListBox", "itemborder", obj, ["normal"]);
    this._addCss("Menu", "itemborder", obj, ["normal"]);
    this._addCss("PopupMenu", "itemborder", obj, ["normal"]);
    this._addCss("Radio", "itemborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Combo", "itembordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itembordertype", obj, ["normal"]);
    this._addCss("ListBox", "itembordertype", obj, ["normal"]);
    this._addCss("PopupMenu", "itembordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Combo", "itemcolor", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itemcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Combo", "itemfont", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itemfont", obj, ["normal"]);

    obj = new nexacro.Style_value("20");
    this._addCss("Combo", "itemheight", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itemheight", obj, ["normal"]);
    this._addCss("ListBox", "itemheight", obj, ["normal"]);
    this._addCss("PopupMenu", "itemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("Combo", "itempadding", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itempadding", obj, ["normal"]);
    this._addCss("ListBox", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#dbeafcff","","","0","0","0","0","true");
    this._addCss("Combo", "itembackground", obj, ["mouseover"]);
    this._addCss("ListBox", "itembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#4a95e7ff","","","0","0","0","0","true");
    this._addCss("Combo", "itembackground", obj, ["selected", "focused"]);
    this._addCss("ListBox", "itembackground", obj, ["selected", "focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Combo", "itemcolor", obj, ["selected", "focused"]);
    this._addCss("Grid>#controlcombo", "itemcolor", obj, ["focused", "selected", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_drop_N.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["normal"]);
    this._addCss("Combo.essential>#dropbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_drop_O.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["mouseover"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_drop_P.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["pushed"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["pushed"]);
    this._addCss("Combo.essential>#dropbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_drop_D.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_padding("1 5 0 5");
    this._addCss("Edit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "padding", obj, ["normal"]);
    this._addCss("MaskEdit", "padding", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("#4a95e7");
    this._addCss("Edit", "selectbackground", obj, ["normal"]);
    this._addCss("MaskEdit", "selectbackground", obj, ["normal"]);
    this._addCss("TextArea", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("1 solid #d5d5d5");
    this._addCss("FileUpload", "buttonborder", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("FileUpload", "buttonbordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "buttonbordertype", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Tab", "buttonbordertype", obj, ["normal", "disabled"]);
    this._addCss("Tab.tab_BF_mdi", "buttonbordertype", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("FileUpload", "buttoncolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("FileUpload", "buttonfont", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 0 0 0");
    this._addCss("FileUpload", "buttonpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("70");
    this._addCss("FileUpload", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_value("FileUpload");
    this._addCss("FileUpload", "buttontext", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("FileUpload", "editbackground", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","");
    this._addCss("FileUpload", "editborder", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("FileUpload", "editbordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("FileUpload", "editcolor", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("FileUpload", "editfont", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 5 0 5");
    this._addCss("FileUpload", "editpadding", obj, ["normal"]);

    obj = new nexacro.Style_color("#4a95e7");
    this._addCss("FileUpload", "editselectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("FileUpload", "editselectcolor", obj, ["normal"]);

    obj = new nexacro.Style_value("21");
    this._addCss("FileUpload", "itemheight", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #6883a4");
    this._addCss("FileUpload", "buttonborder", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_color("#0252a2");
    this._addCss("FileUpload", "buttoncolor", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#6883a4ff","");
    this._addCss("FileUpload", "editborder", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("#458ddbff","","","0","0","0","0","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["focused"]);

    obj = new nexacro.Style_value("1 solid #0f60ab");
    this._addCss("FileUpload", "buttonborder", obj, ["focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("FileUpload", "buttoncolor", obj, ["focused"]);

    obj = new nexacro.Style_background("#f4f4f4ff","","","0","0","0","0","true");
    this._addCss("FileUpload", "editbackground", obj, ["disabled"]);

    obj = new nexacro.Style_color("#aeaeae");
    this._addCss("FileUpload", "editcolor", obj, ["disabled"]);

    obj = new nexacro.Style_background("#f4f4f4ff","","","0","0","0","0","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_color("#aeaeae");
    this._addCss("FileUpload", "buttoncolor", obj, ["disabled"]);

    obj = new nexacro.Style_value("3");
    this._addCss("FileDownload", "linespace", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "linespace", obj, ["normal"]);
    this._addCss("Static", "linespace", obj, ["normal", "mouseover"]);
    this._addCss("TextArea", "linespace", obj, ["normal"]);

    obj = new nexacro.Style_color("#0252a2");
    this._addCss("FileDownload", "color", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("#458ddbff","","","0","0","0","0","true");
    this._addCss("FileDownload", "background", obj, ["focused"]);

    obj = new nexacro.Style_border("1","solid","#0f60abff","");
    this._addCss("FileDownload", "border", obj, ["focused"]);

    obj = new nexacro.Style_border("1","solid","#c9c9c9ff","","1","solid","#c9c9c9ff","","1","solid","#c9c9c9ff","","1","solid","#c9c9c9ff","");
    this._addCss("Grid", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid", "line", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "line", obj, ["normal"]);

    obj = new nexacro.Style_padding("4 10 4 10");
    this._addCss("Grid", "padding", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid", "selectline", obj, ["normal"]);
    this._addCss("Grid>#head", "selectline", obj, ["normal"]);
    this._addCss("Grid>#body", "selectline", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "selectline", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid>#head", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid>#body", "selectlinetype", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "selectlinetype", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#body", "selectlinetype", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("theme://images/ico_treeclose.png");
    this._addCss("Grid", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/ico_treeitem.png");
    this._addCss("Grid", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/ico_treeopen.png");
    this._addCss("Grid", "treeopenbuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "treecollapseimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "treeexpandimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "treeitemmargin", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "treeitemmargin", obj, ["normal"]);

    obj = new nexacro.Style_line("1","solid","#555555ff","");
    this._addCss("Grid", "treelinetype", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#c9c9c9ff","","0","none","","");
    this._addCss("Grid>#head", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("Grid>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#body", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#summary", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "bordertype", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("Grid>#head", "cellalign", obj, ["normal"]);
    this._addCss("Grid>#summ", "cellalign", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellalign", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid>#head", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Tree", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid>#head", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Tree", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Grid>#head", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Grid>#head", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Tree>#body", "cellcolor2", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("bold 10 malgun gothic");
    this._addCss("Grid>#head", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid>#head", "cellgradation", obj, ["normal"]);
    this._addCss("Grid>#body", "cellgradation", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "cellgradation", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellgradation", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid>#head", "cellgradation2", obj, ["normal"]);
    this._addCss("Grid>#body", "cellgradation2", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "cellgradation2", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellgradation2", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#dcdbdaff","");
    this._addCss("Grid>#head", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_value("3");
    this._addCss("Grid>#head", "celllinespace", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#head", "celllinetype", obj, ["normal"]);
    this._addCss("Grid>#summ", "celllinetype", obj, ["normal"]);
    this._addCss("Grid>#summary", "celllinetype", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("Grid>#head", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #3c5869 0,100 #2e4857");
    this._addCss("Grid>#head", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#head", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#summ", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid>#head", "selectborder", obj, ["normal"]);
    this._addCss("Grid>#body", "selectborder", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "selectborder", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectborder", obj, ["normal"]);

    obj = new nexacro.Style_color("");
    this._addCss("Grid>#head", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#summ", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("Grid>#head", "selectfont", obj, ["normal"]);
    this._addCss("Grid>#body", "selectfont", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "selectfont", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid>#head", "selectgradation", obj, ["normal"]);
    this._addCss("Grid>#body", "selectgradation", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "selectgradation", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectgradation", obj, ["normal"]);

    obj = new nexacro.Style_color("#0044ff");
    this._addCss(".cell_link", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#0044ff");
    this._addCss(".cell_link", "color2", obj, ["normal"]);

    obj = new nexacro.Style_color("#0044ff");
    this._addCss(".cell_link", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Grid>#body", "cellalign", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid>#body", "cellcolor", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellcolor", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid>#body", "cellcolor2", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellcolor2", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("10 malgun gothic");
    this._addCss("Grid>#body", "cellfont", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Tree>#body", "cellfont", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#c9c9c9ff","");
    this._addCss("Grid>#body", "cellline", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "cellline", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#body", "celllinespace", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "celllinespace", obj, ["normal"]);
    this._addCss("Grid>#summary", "celllinespace", obj, ["normal"]);

    obj = new nexacro.Style_value("exhor");
    this._addCss("Grid>#body", "celllinetype", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "celllinetype", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#body", "celllinetype", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("2 2 2 2");
    this._addCss("Grid>#body", "cellpadding", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "cellpadding", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("#ffedc2");
    this._addCss("Grid>#body", "selectbackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid>#body", "selectcolor", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Tree>#body", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#d8e6faff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#d8e6faff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_value("#f0f2f8");
    this._addCss("Grid>#body", "selectbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#d2d2d2ff","","1","solid","#d2d2d2ff","","0","none","","","0","none","","");
    this._addCss("Grid>#summ", "border", obj, ["normal"]);
    this._addCss("Grid>#summary", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("#ece9e0ff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "cellbackground", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#dbd4c2ff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Grid>#summ", "cellcolor", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Grid>#summ", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellcolor2", obj, ["mouseover"]);

    obj = new nexacro.Style_font("");
    this._addCss("Grid>#summ", "cellfont", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#bdbdbdff","");
    this._addCss("Grid>#controledit", "border", obj, ["normal"]);
    this._addCss("Button.btn_WF_SearchSmallE", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_MultiSmall", "border", obj, ["mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_CalculatorSmall", "border", obj, ["mouseover", "pushed", "disabled"]);
    this._addCss("Combo.cbo_default_e", "border", obj, ["disabled"]);

    obj = new nexacro.Style_padding("1 7 0 7");
    this._addCss("Grid>#controledit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("#3da2df");
    this._addCss("Grid>#controledit", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333ff");
    this._addCss("Grid>#controledit", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#ebebebff","","","0","0","0","0","true");
    this._addCss("Grid>#controledit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["disabled"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("Grid>#controlcheckbox", "buttonalign", obj, ["normal", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("Grid>#controlcheckbox", "buttonborder", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Tab.tab_TF_menu", "buttonborder", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi", "buttonborder", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 3");
    this._addCss("Grid>#controlcheckbox", "textpadding", obj, ["normal", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images/img_WF_CheckBox_O.png","","0","0","0","0","true");
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_Check_D.png')");
    this._addCss("Grid>#controlcheckbox", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_background("#5698e0ff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcombo", "itembackground", obj, ["focused", "selected", "pushed"]);

    obj = new nexacro.Style_value("17");
    this._addCss("Grid>#controlcalendar", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ffffffff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Grid>#hscrollbar", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("18");
    this._addCss("Grid>#hscrollbar", "decbtnsize", obj, ["normal"]);

    obj = new nexacro.Style_value("18");
    this._addCss("Grid>#hscrollbar", "incbtnsize", obj, ["normal"]);

    obj = new nexacro.Style_value("18");
    this._addCss("Grid>#hscrollbar", "scrollbarsize", obj, ["normal"]);

    obj = new nexacro.Style_background("#696969ff","","","0","0","0","0","true");
    this._addCss("Grid>#hscrollbar>#trackbar", "background", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_border("1","solid","#cbcbcbff","");
    this._addCss("GroupBox", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("GroupBox", "color", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice", "color", obj, ["normal"]);
    this._addCss("Static.styLog_Text2", "color", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_MF_text1", "color", obj, ["normal", "disabled", "focused", "selected"]);
    this._addCss("Button.btn_MF_text2", "color", obj, ["focused", "selected"]);
    this._addCss("Button.btn_MF_text3", "color", obj, ["focused", "selected"]);
    this._addCss("Static.sta_GID_Title", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GID_txt02", "color", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_Process1", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Process2", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Process3", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Process4", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Process5", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Process6", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_TabS", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/img_group.png')");
    this._addCss("GroupBox", "titleimage", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_align("lefttext middle");
    this._addCss("GroupBox", "titleimagealign", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("GroupBox", "titlepadding", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e1e1e1ff","");
    this._addCss("GroupBox", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#cacaca");
    this._addCss("GroupBox", "color", obj, ["disabled"]);

    obj = new nexacro.Style_border("0","solid","#e7e7e7ff","","1","solid","#31596bff","","1","solid","#e7e7e7ff","","0","solid","#e7e7e7ff","");
    this._addCss("Grid.grd_LF_Tree", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#33333");
    this._addCss("Grid.grd_LF_Tree", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::ico_treeclose.png')");
    this._addCss("Grid.grd_LF_Tree", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::img_LF_TreeItem.png')");
    this._addCss("Grid.grd_LF_Tree", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::ico_treeopen.png')");
    this._addCss("Grid.grd_LF_Tree", "treeopenbuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("#FFEDC2");
    this._addCss("Grid.grd_LF_Tree", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_Tree>#body", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_Tree>#body", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Grid.grd_LF_Tree>#body", "cellcolor", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_LF_Tree>#body", "cellline", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellline", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Grid.grd_MF_notice>#body", "cellline", obj, ["normal", "disabled", "mouseover", "selected"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f5f5f5 0,100 #ffffff");
    this._addCss("Grid.grd_LF_Tree>#body", "cellgradation", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f5f5f5 0,100 #ffffff");
    this._addCss("Grid.grd_LF_Tree>#body", "cellgradation2", obj, ["normal"]);

    obj = new nexacro.Style_value("transparent");
    this._addCss("Grid.grd_LF_Tree>#body", "selectbackground", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MF_notice>#body", "selectbackground", obj, ["normal", "disabled", "mouseover", "selected"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_Tree>#body", "background", obj, ["mouseover"]);
    this._addCss("Tab>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Tabpage>Div", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#a9a9a9ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_Tree>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#a9a9a9ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_Tree>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#cfcfcfff","");
    this._addCss("ImageViewer", "border", obj, ["disabled"]);

    obj = new nexacro.Style_background("#f4f4f4ff","","","0","0","0","0","true");
    this._addCss("ListBox", "itembackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Menu", "checkboximage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Menu", "expandimage", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Dotum");
    this._addCss("Menu", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_Label_CT", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_CB", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_SearchLabel", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_SearchLabel_P", "font", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_Com_G", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Com_B", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Com_R", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_WF_Subtitle", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Subtitle02", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Subtitle03", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GID_Title", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_align("");
    this._addCss("Menu", "itemalign", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Menu", "itembordertype", obj, ["normal"]);
    this._addCss("Radio", "itembordertype", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 25 0 25");
    this._addCss("Menu", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#6612b2ff","");
    this._addCss("Menu", "popupborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Menu", "popupbordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Menu", "popupcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Menu", "popupfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Menu", "popupitembackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#c6c6c6ff","","0","none","","");
    this._addCss("Menu", "popupitemborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Menu", "popupitembordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("27");
    this._addCss("Menu", "popupitemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 11 0 29");
    this._addCss("Menu", "popupitempadding", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Menu", "popuppadding", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Menu", "popuptype", obj, ["normal"]);

    obj = new nexacro.Style_color("#6612b2");
    this._addCss("Menu", "color", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_color("#2c4898");
    this._addCss("Menu", "popupcolor", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_font("bold 9 Dotum");
    this._addCss("Menu", "popupfont", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_color("#6612b2");
    this._addCss("Menu", "popupcolor", obj, ["selected", "focused"]);

    obj = new nexacro.Style_color("#5a280b66");
    this._addCss("Menu", "color", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Menu", "popupcolor", obj, ["disabled"]);

    obj = new nexacro.Style_value("theme://images/ico_menu_check.png");
    this._addCss("PopupMenu", "checkboximage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/ico_expand_N.png");
    this._addCss("PopupMenu", "expandimage", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 10 0 10");
    this._addCss("PopupMenu", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_padding("7 0 0 0");
    this._addCss("PopupMenu", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("#f15b47ff","","","0","0","0","0","true");
    this._addCss("PopupMenu", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_LF_SubMenu", "background", obj, ["pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_Bookmark", "background", obj, ["pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF_MenuNm", "background", obj, ["normal"]);
    this._addCss("Button.btn_WF_Com_R", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#f15b47ff","","","0","0","0","0","true");
    this._addCss("PopupMenu", "itembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("@gradation");
    this._addCss("ProgressBar", "barcolor", obj, ["normal"]);
    this._addCss("ProgressBarControl", "barcolor", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #63a7ec 0,100 #4b96e7");
    this._addCss("ProgressBar", "bargradation", obj, ["normal"]);

    obj = new nexacro.Style_value("color");
    this._addCss("ProgressBar", "bartype", obj, ["normal"]);
    this._addCss("ProgressBarControl", "bartype", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#8e8e8eff","","1","solid","#e1e1e1ff","","1","solid","#e1e1e1ff","","1","solid","#8e8e8eff","");
    this._addCss("ProgressBar", "border", obj, ["normal", "disabled"]);
    this._addCss("ProgressBarControl", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("forward");
    this._addCss("ProgressBar", "direction", obj, ["normal"]);
    this._addCss("ProgressBarControl", "direction", obj, ["normal"]);

    obj = new nexacro.Style_value("true");
    this._addCss("ProgressBar", "smooth", obj, ["normal"]);
    this._addCss("ProgressBarControl", "smooth", obj, ["normal"]);

    obj = new nexacro.Style_color("#cfcfcf");
    this._addCss("ProgressBar", "barcolor", obj, ["disabled"]);
    this._addCss("ProgressBarControl", "barcolor", obj, ["disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f1835e 0,100 #ed6d45");
    this._addCss("ProgressBarControl", "bargradation", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#80808000","");
    this._addCss("Radio", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/img_WF_RadioBg.png","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("Radio", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_gradation("normal 0 0");
    this._addCss("Radio", "buttongradation", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_Radio.png')");
    this._addCss("Radio", "buttonimage", obj, ["normal", "disabled", "selected"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Radio", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 0 0 5");
    this._addCss("Radio", "textpadding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/img_WF_RadioBg_O.png","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/img_WF_RadioBg_D.png","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["disabled", "readonly", "mouseover", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_Radio_D.png')");
    this._addCss("Radio", "buttonimage", obj, ["disabled", "readonly", "mouseover"]);

    obj = new nexacro.Style_value("right");
    this._addCss("Spin", "buttonalign", obj, ["normal"]);
    this._addCss("SpinControl", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_color("#46463dff");
    this._addCss("Spin>#spinedit", "color", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_spindown_O.png");
    this._addCss("Spin>#spindownbutton", "image", obj, ["mouseover"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_spindown_P.png");
    this._addCss("Spin>#spindownbutton", "image", obj, ["pushed"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_spindown_D.png");
    this._addCss("Spin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/tab_bg.png","repeat-x","0","0","0","0","true");
    this._addCss("Tab", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#e2e2e2ff","","1","solid","#e2e2e2ff","","1","solid","#e2e2e2ff","");
    this._addCss("Tab", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/bg_tab.png","stretch","7","7","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("2 30 0 30");
    this._addCss("Tab", "buttonpadding", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#878787");
    this._addCss("Tab", "color", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("9");
    this._addCss("Tab", "font", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tab", "showextrabutton", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_align("");
    this._addCss("Tab", "stepalign", obj, ["normal", "disabled"]);
    this._addCss("Tabpage", "stepalign", obj, ["normal"]);
    this._addCss("Tab.tab_TF_menu>Tabpage", "stepalign", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi>Tabpage", "stepalign", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tab", "stepshowtype", obj, ["normal", "disabled"]);
    this._addCss("Tabpage", "stepshowtype", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi", "stepshowtype", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/bg_tab_O.png","stretch","7","7","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_line("0","none","","");
    this._addCss("Tab", "focusborder", obj, ["mouseover"]);
    this._addCss("Tab.tab_BF_mdi", "focusborder", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/bg_tab_S.png","stretch","7","7","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["selected", "focused"]);

    obj = new nexacro.Style_border("");
    this._addCss("Tab>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spinup.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spinup_O.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spinup_P.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spinup_D.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spindn.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spindn_O.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spindn_P.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/tab_spindn_D.png");
    this._addCss("Tab>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("theme://images/tab_extra.png");
    this._addCss("Tab>#extrabutton", "image", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_padding("4 0 0 5");
    this._addCss("TextArea", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/img_TF_bg.png","stretch","100","51","0","0","true");
    this._addCss("Static.sta_TF_Bg", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/img_TF_logo.png","","0","0","0","0","true");
    this._addCss("Static.sta_TF_logo", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #bababa 0,100 #929292");
    this._addCss("Static.sta_MDI_Bg", "gradation", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("3","solid","#888888ff","","0","none","#808080ff","","1","solid","#6f6f6fff","","0","none","#808080ff","");
    this._addCss("Static.sta_MDI_Bg", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_TF_home.png')");
    this._addCss("Button.btn_TF_home", "image", obj, ["normal", "disabled", "focused", "mouseover", "selected", "pushed"]);

    obj = new nexacro.Style_color("#8e9aa9");
    this._addCss("Button.btn_TF_myinfo", "color", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_value("default");
    this._addCss("Button.btn_TF_myinfo", "cursor", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_MF_todoNm", "cursor", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Button.btn_BF_Location", "cursor", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_FormTitle", "cursor", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_TF_myinfo.png')");
    this._addCss("Button.btn_TF_myinfo", "image", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_align("lefttext middle");
    this._addCss("Button.btn_TF_myinfo", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_BF_Location", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_TF_set.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_set", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_TF_set_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_set", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_TF_set_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_set", "background", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_TF_logout.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_logout", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_TF_logout_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_logout", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_TF_logout_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_logout", "background", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_font("antialias 11 Malgun Gothic");
    this._addCss("Tab.tab_TF_menu", "font", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_MF_text3", "font", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Static.sta_MF_todo1", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_todo4", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Tab.tab_TF_menu", "color", obj, ["normal"]);
    this._addCss("Static.sta_MF_todo2", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Tab.tab_TF_menu", "buttonbackground", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("3 16 16 16");
    this._addCss("Tab.tab_TF_menu", "buttonpadding", obj, ["normal"]);

    obj = new nexacro.Style_margin("0 0 0 0");
    this._addCss("Tab.tab_TF_menu", "buttonmargin", obj, ["normal"]);

    obj = new nexacro.Style_color("#ed4726");
    this._addCss("Tab.tab_TF_menu", "color", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_TF_menu_P.png","","0","0","50","100","true");
    this._addCss("Tab.tab_TF_menu", "buttonbackground", obj, ["selected", "focused"]);

    obj = new nexacro.Style_color("#f1f3f6");
    this._addCss("Tab.tab_TF_menu", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tab.tab_TF_menu>Tabpage", "letterspace", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu", "letterspace", obj, ["normal"]);
    this._addCss("Tab.tab_BF_mdi>Tabpage", "letterspace", obj, ["normal"]);

    obj = new nexacro.Style_background("#44464aff","","","0","0","0","0","true");
    this._addCss("Form.frm_LF_Bg", "background", obj, ["normal"]);
    this._addCss("Button.btn_LF_SubMenu", "background", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_LF_Bookmark", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#dcdfe3ff","","0","none","","","0","none","","");
    this._addCss("Div.div_LF_box02", "border", obj, ["normal"]);
    this._addCss("PopupDiv.pdiv_LF_box01", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_LF_submenu.png')");
    this._addCss("Button.btn_LF_SubMenu", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#db4534ff","","","0","0","0","0","true");
    this._addCss("Button.btn_LF_SubMenu", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_LF_Bookmark", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_LF_MenuNm", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_LF_mymenu.png')");
    this._addCss("Button.btn_LF_Bookmark", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_bordertype("round","30","30","true","true","true","true");
    this._addCss("Button.btn_LF_MenuNm", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_todoNm", "bordertype", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_font("bold antialias 10 Malgun Gothic");
    this._addCss("Button.btn_LF_MenuNm", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_padding("0 0 2 0");
    this._addCss("Button.btn_LF_MenuNm", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#d13438ff","","","0","0","0","0","true");
    this._addCss("Button.btn_LF_MenuNm", "background", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#64666aff","","","0","0","0","0","true");
    this._addCss("Button.btn_LF_MenuNm", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#44464a");
    this._addCss("Button.btn_LF_MenuNm", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_LF_Mymenu", "selectpointimage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/ico_LF_close.png");
    this._addCss("Grid.grd_LF_Mymenu", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/dummy.png");
    this._addCss("Grid.grd_LF_Mymenu", "treecollapseimage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/dummy.png");
    this._addCss("Grid.grd_LF_Mymenu", "treeexpandimage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/ico_LF_tree01.png");
    this._addCss("Grid.grd_LF_Mymenu", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_line("1","dotted","#989898ff","");
    this._addCss("Grid.grd_LF_Mymenu", "treelinetype", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/ico_LF_open.png");
    this._addCss("Grid.grd_LF_Mymenu", "treeopenbuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellalign", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#body", "cellalign", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellbackground", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#body", "cellbackground", obj, ["normal", "disabled", "mouseover", "selected"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellbackground2", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#body", "cellbackground2", obj, ["normal", "disabled", "mouseover", "selected"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("2 0 0 0");
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellpadding", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#body", "cellpadding", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("#fde3d3");
    this._addCss("Grid.grd_LF_Mymenu>#body", "selectbackground", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_LF_Mymenu>#body", "selectborder", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#body", "selectborder", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Grid.grd_LF_Mymenu>#body", "selectcolor", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_font("bold 9 Dotum");
    this._addCss("Grid.grd_LF_Mymenu>#body", "selectfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_LF_Mymenu>#body", "selectline", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#body", "selectline", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#f4f4f4ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#f4f4f4ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_Mymenu>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar", "decbtnsize", obj, ["normal"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar", "incbtnsize", obj, ["normal"]);

    obj = new nexacro.Style_value("11");
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar", "scrollbarsize", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/grd_LF_menuVtrckBg.png","stretch","0","10","0","0","true");
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar>#trackbar", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar>#trackbar", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/grd_LF_menuVtrck.png')");
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar>#trackbar", "image", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar>#trackbar", "image", obj, ["normal", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/grd_LF_menuVtrckBg_O.png","stretch","0","10","0","0","true");
    this._addCss("Grid.grd_LF_Mymenu>#vscrollbar>#trackbar", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Grid.grd_MF_notice>#vscrollbar>#trackbar", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/grd_LF_menuHtrckBg.png","stretch","10","0","0","0","true");
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar>#trackbar", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar>#trackbar", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/grd_LF_menuHtrck.png')");
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar>#trackbar", "image", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar>#trackbar", "image", obj, ["normal", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/grd_LF_menuHtrckBg_O.png","stretch","10","0","0","0","true");
    this._addCss("Grid.grd_LF_Mymenu>#hscrollbar>#trackbar", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Grid.grd_MF_notice>#hscrollbar>#trackbar", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/bg_LT_bg.png","repeat-x","0","0","0","0","true");
    this._addCss("Static.sta_LF_text1", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#f15b47");
    this._addCss("Static.sta_LF_text1", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_todo2", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_font("bold antialias 12 Malgun Gothic");
    this._addCss("Static.sta_LF_text1", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/bg_BT_Mdi.png","repeat-x","0","0","0","0","true");
    this._addCss("Form.frm_BF_mdibg", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_Mdi.png","stretch","7","7","0","0","true");
    this._addCss("Tab.tab_BF_mdi", "buttonbackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("0 10 0 14");
    this._addCss("Tab.tab_BF_mdi", "buttonpadding", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#9b9b9b");
    this._addCss("Tab.tab_BF_mdi", "color", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("true");
    this._addCss("Tab.tab_BF_mdi", "showextrabutton", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Tab.tab_BF_mdi", "stepalign", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_Mdi_O.png","stretch","7","7","0","0","true");
    this._addCss("Tab.tab_BF_mdi", "buttonbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#555c68");
    this._addCss("Tab.tab_BF_mdi", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#404a5b");
    this._addCss("Tab.tab_BF_mdi", "color", obj, ["selected", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_Mdi_S.png","stretch","7","7","0","0","true");
    this._addCss("Tab.tab_BF_mdi", "buttonbackground", obj, ["selected", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_max.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_Max", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_max_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_Max", "background", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_max_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_Max", "background", obj, ["pushed"]);

    obj = new nexacro.Style_value("50");
    this._addCss("Button.btn_Mdi_Max", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_Mdi_hor", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_Mdi_Close", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_Mdi_ver", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_Creation", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_T", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_LeftMenuFA", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_Home", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_horizon.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_hor", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_horizon_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_hor", "background", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_horizon_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_hor", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_close.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_Close", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_close_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_Close", "background", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_close_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_Close", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_vertical.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_ver", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_vertical_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_ver", "background", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_BT_vertical_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_Mdi_ver", "background", obj, ["pushed"]);

    obj = new nexacro.Style_color("#3c4452");
    this._addCss("Static.sta_MF_name", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_text1", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("antialias 14 Malgun Gothic");
    this._addCss("Static.sta_MF_name", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("antialias 10 Malgun Gothic");
    this._addCss("Static.sta_MF_text1", "font", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MF_notice", "font", obj, ["normal"]);
    this._addCss(".cell_dday", "font", obj, ["normal"]);
    this._addCss("Static.styLog_Text2", "font", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_MF_text1", "font", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MF_text2", "font", obj, ["mouseover", "pushed", "normal", "disabled"]);
    this._addCss("Static.sta_MF_todo3", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_ErrorText2", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#f2f5f8ff","","","0","0","0","0","true");
    this._addCss("Div.div_MF_bottom", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Grid.grd_MF_notice>#body", "cellcolor", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Grid.grd_MF_notice>#body", "cellcolor2", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("antialias 10 Malgun Gothic");
    this._addCss("Grid.grd_MF_notice>#body", "cellfont", obj, ["normal", "disabled", "mouseover", "selected"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Grid.grd_MF_notice>#body", "selectcolor", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("antialias 10 Malgun Gothic");
    this._addCss("Grid.grd_MF_notice>#body", "selectfont", obj, ["normal", "disabled", "mouseover", "selected"]);
    this._addCss(".cell_dday", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#f15b47");
    this._addCss("Grid.grd_MF_notice>#body", "cellcolor", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_color("#f15b47");
    this._addCss("Grid.grd_MF_notice>#body", "cellcolor2", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_color("#f15b47");
    this._addCss("Grid.grd_MF_notice>#body", "selectcolor", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss(".cell_dday", "color2", obj, ["normal"]);

    obj = new nexacro.Style_value("antialias 10 Malgun Gothic");
    this._addCss(".cell_dday", "font2", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 1 0");
    this._addCss(".cell_dday", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://img/div_remote_bg.png","stretch","10","50","0","0","true");
    this._addCss("Form.div_remote_bg", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/frm_pop_Bg.png","stretch","10","50","0","0","true");
    this._addCss("Form.frm_pop_Bg", "background", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 11 Dotum");
    this._addCss("Div.div_PopTitle", "font", obj, ["normal", "mouseover"]);
    this._addCss("Edit.edt_WF_Calendaryy", "font", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_padding("2 0 0 19");
    this._addCss("Div.div_PopTitle", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_pop_close.png","","0","0","50","50","true");
    this._addCss("Button.btn_pop_close", "background", obj, ["normal", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_pop_close_O.png","","0","0","50","50","true");
    this._addCss("Button.btn_pop_close", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_value("30");
    this._addCss("Button.btn_pop_close", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_background("#f2f4f5ff","","","0","0","0","0","true");
    this._addCss("Static.styLog_box", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("2","solid","#0d59a7ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Static.styLog_box", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_LabelLine", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("antialias 9 Malgun Gothic");
    this._addCss("Static.styLog_Text1", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("Static.styLog_Text1", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#0D59A7");
    this._addCss("Button.btn_MF_text1", "color", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_MF_text2", "color", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_MF_text3", "color", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_MF_todotab", "color", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_todotab_S", "color", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_todotab_N", "color", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_font("underline antialias 10 Malgun Gothic");
    this._addCss("Button.btn_MF_text1", "font", obj, ["focused", "selected"]);
    this._addCss("Button.btn_MF_text2", "font", obj, ["focused", "selected"]);

    obj = new nexacro.Style_color("#888888");
    this._addCss("Button.btn_MF_text2", "color", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_BF_Location", "color", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_color("#252525");
    this._addCss("Button.btn_MF_text3", "color", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_todo1", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("underline antialias 11 Malgun Gothic");
    this._addCss("Button.btn_MF_text3", "font", obj, ["focused", "selected"]);

    obj = new nexacro.Style_background("#0d59a7ff","","","0","0","0","0","true");
    this._addCss("Button.btn_MF_login", "background", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Button.btn_MF_todoNm", "background", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_font("antialias 18 Malgun Gothic");
    this._addCss("Button.btn_MF_login", "font", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Edit.login", "font", obj, ["normal"]);
    this._addCss("Button.btn_MF_todotab", "font", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_todotab_S", "font", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_todotab_N", "font", obj, ["enabled", "disabled", "focused", "selected", "normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_padding("0 0 7 0");
    this._addCss("Button.btn_MF_login", "padding", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Static.sta_MF_title1", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_POP_Text1", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#c3c3c3ff","");
    this._addCss("Edit.login", "border", obj, ["normal"]);

    obj = new nexacro.Style_padding("10 10 3 60");
    this._addCss("Edit.login", "padding", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#828282ff","");
    this._addCss("Edit.login", "border", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("","theme://images/ico_MF_img01.png","","0","0","0","50","true");
    this._addCss("Static.sta_MF_todo", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("antialias 16 Tahoma");
    this._addCss("Static.sta_MF_todo", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 0 40");
    this._addCss("Static.sta_MF_todo", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#5f5f60");
    this._addCss("Static.sta_MF_todo", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_info", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("antialias 12 Malgun Gothic");
    this._addCss("Static.sta_MF_info", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("antialias 13 Verdana");
    this._addCss("Button.btn_MF_todoNm", "font", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_padding("0 0 3 0");
    this._addCss("Button.btn_MF_todoNm", "padding", obj, ["normal", "disabled", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Button.btn_MF_todotab", "padding", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_todotab_S", "padding", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_todotab_N", "padding", obj, ["enabled", "disabled", "focused", "selected", "normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","5","solid","#ffffffff","","0","none","","");
    this._addCss("Button.btn_MF_todotab", "border", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Button.btn_MF_todotab_N", "border", obj, ["enabled", "disabled", "focused", "selected", "normal", "mouseover"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","5","solid","#0d59a7ff","","0","none","","");
    this._addCss("Button.btn_MF_todotab", "border", obj, ["pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_todotab_S", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MF_todotab_N", "border", obj, ["pushed"]);

    obj = new nexacro.Style_font("antialias 23 Malgun Gothic");
    this._addCss("Static.sta_MF_todo2", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 0 8");
    this._addCss("Static.sta_MF_todo2", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_todo4", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_todo5", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#5b4f49ff","","","0","0","0","0","true");
    this._addCss("Static.sta_MF_todo3", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 4 18");
    this._addCss("Static.sta_MF_todo3", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#ae9688ff");
    this._addCss("Static.sta_MF_todo3", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#ff9049");
    this._addCss("Static.sta_MF_todo4", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_MF_link1", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_font("antialias 16 Malgun Gothic");
    this._addCss("Static.sta_MF_todo5", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#0D59A7ff");
    this._addCss("Static.sta_MF_todo5", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_MF_img09.png","","0","0","0","50","true");
    this._addCss("Button.btn_MF_link1", "background", obj, ["normal", "disabled", "selected", "focused", "mouseover", "pushed"]);

    obj = new nexacro.Style_font("antialias 13 Malgun Gothic");
    this._addCss("Button.btn_MF_link1", "font", obj, ["normal", "disabled", "selected", "focused", "mouseover", "pushed"]);
    this._addCss("Static.sta_WF_ErrorText1", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 3 18");
    this._addCss("Button.btn_MF_link1", "padding", obj, ["normal", "disabled", "selected", "focused", "mouseover", "pushed"]);

    obj = new nexacro.Style_color("#f37322");
    this._addCss("Button.btn_MF_link1", "color", obj, ["pushed"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","3","solid","#f9ba91ff","","0","none","","");
    this._addCss("Static.sta_MF_title1", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("bold antialias 14 Malgun Gothic");
    this._addCss("Static.sta_MF_title1", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_title2", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#363636");
    this._addCss("Static.sta_MF_title1", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_MF_title2", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#ececedff","","","0","0","0","0","true");
    this._addCss("Static.sta_MF_title2", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("4","solid","#ececedff","");
    this._addCss("Static.sta_MF_title2", "border", obj, ["normal"]);

    obj = new nexacro.Style_padding("20 0 0 28");
    this._addCss("Static.sta_MF_title2", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("9");
    this._addCss("Static.sta_MF_title2", "linespace", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("4","solid","#f9ba91ff","");
    this._addCss("Static.sta_MF_title2", "border", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_Search.png","","0","0","50","50","true");
    this._addCss("Button.btn_TF_SearchSmall", "background", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_WF_SearchSmall", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_Search_O.png","","0","0","50","50","true");
    this._addCss("Button.btn_TF_SearchSmall", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_WF_SearchSmall", "background", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_Search_D.png","","0","0","50","50","true");
    this._addCss("Button.btn_TF_SearchSmall", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#f0f0f0ff","","","0","0","0","0","true");
    this._addCss("Div.div_WF_GrdBg", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#dfdfdfff","","1","solid","#dfdfdfff","","1","solid","#dfdfdfff","");
    this._addCss("Div.div_WF_GrdBg", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("2","solid","#0d59a7ff","","0","none","#808080ff","","0","none","#808080ff","","0","none","#808080ff","");
    this._addCss("Div.div_WF_DetailBg", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/Div_Pop_Bg.png","stretch","40","40","0","0","true");
    this._addCss("Div.div_WF_insert", "background", obj, ["normal", "mouseover"]);
    this._addCss("PopupDiv.pdiv_WF_insert", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 0 15");
    this._addCss("Static.sta_POP_PopTitle", "padding", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Button.btn_MDI_TabS", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_TabN", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_WF_Renewal2", "padding", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/Div_Pop_Bg2.png","stretch","10","30","0","0","true");
    this._addCss("Form.frm_pop_Bg2", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f6f7f9ff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_Label", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_C", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_CB", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_L", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#ced0d7ff","","1","solid","#e6e6e6ff","","1","solid","#ced0d7ff","","1","solid","#e6e6e6ff","");
    this._addCss("Static.sta_WF_Label", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_P", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_C", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_CT", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_CB", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_L", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("1 0 0 17");
    this._addCss("Static.sta_WF_Label", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_P", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_L", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Subtitle02", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#404654");
    this._addCss("Static.sta_WF_Label", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_P", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_C", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_CT", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_CB", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Label_L", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#f6f7f9ff","theme://images/sta_WF_Label_P1.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_Label_P", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#edeff3ff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_Label_CT", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#d8d8d8ff","","1","solid","#e6e6e6ff","","1","solid","#d8d8d8ff","","1","solid","#e6e6e6ff","");
    this._addCss("Static.sta_WF_Labelbg", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Labelbg_T", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("1 0 0 14");
    this._addCss("Static.sta_WF_Labelbg", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("1 0 0 10");
    this._addCss("Static.sta_WF_Labelbg_T", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_SearchLabel", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_SearchLabel_P", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/div_WF_Calendar.png","stretch","10","30","0","0","true");
    this._addCss("Div.div_WF_Calendar", "background", obj, ["normal"]);
    this._addCss("PopupDiv.pdiv_WF_Calendar", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#fafafaff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Calmm", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_align("center top");
    this._addCss("Button.btn_WF_Calmm", "imagealign", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_Calmm_S", "imagealign", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_font("bold antialias 15 Tahoma");
    this._addCss("Button.btn_WF_Calmm", "font", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_Calmm_S", "font", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Button.btn_WF_Calmm", "color", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_padding("0 0 6 0");
    this._addCss("Button.btn_WF_Calmm", "padding", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_Calmm_S", "padding", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_align("center bottom");
    this._addCss("Button.btn_WF_Calmm", "align", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_Calmm_S", "align", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#e9e9e9ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Calmm", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#ffa6a5ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Calmm", "background", obj, ["pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_Calmm_S", "background", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Calendar.cal_WF_ComCal", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/dummy.png')");
    this._addCss("Calendar.cal_WF_ComCal>#dropbutton", "image", obj, ["normal", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_background("#fff0e7ff","","","0","0","0","0","true");
    this._addCss("Edit.essential", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("MaskEdit.essential", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("TextArea.essential", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Combo.essential", "background", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Calendar.essential", "background", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Spin.essential", "background", obj, ["normal", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("#dc5544");
    this._addCss("Edit.essential", "selectbackground", obj, ["normal"]);
    this._addCss("MaskEdit.essential", "selectbackground", obj, ["normal"]);
    this._addCss("TextArea.essential", "selectbackground", obj, ["normal"]);
    this._addCss("Combo.essential>#comboedit", "selectbackground", obj, ["normal"]);
    this._addCss("Spin.essential>#spinedit", "selectbackground", obj, ["normal"]);
    this._addCss("Calendar.essential>#calendaredit", "selectbackground", obj, ["normal"]);
    this._addCss("Combo.essential>#combolist", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d16a5dff","");
    this._addCss("Edit.essential", "border", obj, ["mouseover", "focused"]);
    this._addCss("MaskEdit.essential", "border", obj, ["mouseover", "focused"]);
    this._addCss("TextArea.essential", "border", obj, ["mouseover", "focused"]);
    this._addCss("Combo.essential", "border", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Calendar.essential", "border", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Spin.essential", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Combo.essential>#combolist", "border", obj, ["normal"]);
    this._addCss("Button.btn_WF_SearchSmallE", "border", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("#fce0cfff","","","0","0","0","0","true");
    this._addCss("Combo.essential", "itembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#dc5544ff","","","0","0","0","0","true");
    this._addCss("Combo.essential", "itembackground", obj, ["focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images/img_WF_EssentialCheckBox.png","","0","0","0","0","true");
    this._addCss("CheckBox.essential", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_EssentialCheck.png')");
    this._addCss("CheckBox.essential", "buttonimage", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_background("","theme://images/img_WF_EssentialCheckBox_O.png","","0","0","0","0","true");
    this._addCss("CheckBox.essential", "buttonbackground", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_background("","theme://images/img_WF_EssentialRadioBg.png","","0","0","0","0","true");
    this._addCss("Radio.essential", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_EssentialRadio.png')");
    this._addCss("Radio.essential", "buttonimage", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/img_WF_EssentialRadioBg_O.png","","0","0","0","0","true");
    this._addCss("Radio.essential", "buttonbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_grd_essential.png","","0","0","0","0","true");
    this._addCss(".Cellgrd_essential", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/ico_grd_edit.png","","0","0","0","0","true");
    this._addCss(".Cellgrd_edit", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#004db7");
    this._addCss(".cell_link", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#004db7");
    this._addCss(".cell_link", "color2", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum bold");
    this._addCss(".cell_link", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("9 Dotum bold");
    this._addCss(".cell_link", "font2", obj, ["normal"]);

    obj = new nexacro.Style_color("#004db7");
    this._addCss(".cell_link", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum bold");
    this._addCss(".cell_link", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#f6f6f6ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_Head", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f8f8d1ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum01", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f8f8d1ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum01", "background2", obj, ["normal"]);

    obj = new nexacro.Style_value("9 Dotum");
    this._addCss(".Cellgrd_WF_sum01", "font2", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "font2", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss(".Cellgrd_WF_sum01", "color2", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "color2", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d2c7c2ff","");
    this._addCss(".Cellgrd_WF_sum01", "border", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d2c7c2ff","");
    this._addCss(".Cellgrd_WF_sum01", "cellline", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_background("#e8fedcff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum02", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#e8fedcff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum02", "background2", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 0");
    this._addCss(".cell_right", "padding", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 5");
    this._addCss(".cell_left", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("#edededff","theme://img/ico_WF_GrdFilter.png","","0","0","100","50","true");
    this._addCss(".cell_filter", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#edededff","theme://img/ico_WF_GrdFilterEssen.png","stretch","20","0","0","0","true");
    this._addCss(".cell_filter_e", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#c6c9cdff","");
    this._addCss("Div.div_WF_SearchBg", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","2","2","true","true","true","true");
    this._addCss("Div.div_WF_SearchBg", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_Label_P.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_SearchLabel_P", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#6f7786ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Com_G", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#6f7786ff","");
    this._addCss("Button.btn_WF_Com_G", "border", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 1");
    this._addCss("Button.btn_WF_Com_G", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Com_B", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Com_R", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#3e475aff","");
    this._addCss("Button.btn_WF_Com_G", "border", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#50617eff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Com_G", "background", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_border("1","solid","#2c3a54ff","");
    this._addCss("Button.btn_WF_Com_G", "border", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#c9cdd3ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Com_G", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_Com_B", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_Com_R", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#c9cdd3ff","");
    this._addCss("Button.btn_WF_Com_G", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_Com_B", "border", obj, ["disabled"]);
    this._addCss("Button.btn_WF_Com_R", "border", obj, ["disabled"]);

    obj = new nexacro.Style_background("#3333ffff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Com_B", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#3333ffff","");
    this._addCss("Button.btn_WF_Com_B", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#3300ffff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Com_B", "background", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_border("1","solid","darkblue","");
    this._addCss("Button.btn_WF_Com_B", "border", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_border("1","solid","#f15b47ff","");
    this._addCss("Button.btn_WF_Com_R", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#c61910ff","");
    this._addCss("Button.btn_WF_Com_R", "border", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#d24538ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Com_R", "background", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_border("1","solid","#ad130cff","");
    this._addCss("Button.btn_WF_Com_R", "border", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/btn_WF_CRUD1.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_Com_N", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#cacfd7ff","");
    this._addCss("Button.btn_WF_Com_N", "border", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WF_Com_C", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#939aa6ff","");
    this._addCss("Button.btn_WF_Com_N", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Com_C", "border", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#5a6779ff","");
    this._addCss("Button.btn_WF_Com_N", "border", obj, ["pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_Com_C", "border", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("40");
    this._addCss("Button.btn_WF_Com_N", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_Com_C", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/btn_WF_CRUD2.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_Com_C", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#f9f9f9ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Module", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#a3aeb7ff","");
    this._addCss("Button.btn_WF_Module", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("#f2f7ffff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Module", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#6a7680ff","");
    this._addCss("Button.btn_WF_Module", "border", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#6e7994ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Module", "background", obj, ["pushed", "focused"]);
    this._addCss("Button.btn_WF_CRUD", "background", obj, ["selected"]);

    obj = new nexacro.Style_border("1","solid","#56607cff","");
    this._addCss("Button.btn_WF_Module", "border", obj, ["pushed", "focused"]);
    this._addCss("Button.btn_WF_CRUD", "border", obj, ["selected"]);

    obj = new nexacro.Style_border("0","solid","#d5d5d5ff","");
    this._addCss("Button.btn_WF_SearchSmall", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("#8793adff","theme://images/btn_WF_Search_P.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_SearchSmall", "background", obj, ["pushed"]);

    obj = new nexacro.Style_border("1","solid","#6d7896ff","");
    this._addCss("Button.btn_WF_SearchSmall", "border", obj, ["pushed"]);

    obj = new nexacro.Style_background("#f4f4f4ff","theme://images/btn_WF_Search_D.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_SearchSmall", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_Bookmark.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Bookmark", "background", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_font("12 Dotum");
    this._addCss("Button.btn_WF_Bookmark", "font", obj, ["normal", "focused", "selected", "disabled", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_Bookmark_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Bookmark", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Bookmark_S", "background", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_Bookmark_S.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Bookmark", "background", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Search.png')");
    this._addCss("Button.btn_WF_Search", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Search_O.png')");
    this._addCss("Button.btn_WF_Search", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Search_P.png')");
    this._addCss("Button.btn_WF_Search", "image", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_Search_D.png')");
    this._addCss("Button.btn_WF_Search", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleR.png')");
    this._addCss("Button.btn_WF_ShuttleR", "image", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleR_P.png')");
    this._addCss("Button.btn_WF_ShuttleR", "image", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleR_D.png')");
    this._addCss("Button.btn_WF_ShuttleR", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleR2.png')");
    this._addCss("Button.btn_WF_ShuttleR2", "image", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleR2_P.png')");
    this._addCss("Button.btn_WF_ShuttleR2", "image", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleR2_D.png')");
    this._addCss("Button.btn_WF_ShuttleR2", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleL.png')");
    this._addCss("Button.btn_WF_ShuttleL", "image", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleL_P.png')");
    this._addCss("Button.btn_WF_ShuttleL", "image", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleL_D.png')");
    this._addCss("Button.btn_WF_ShuttleL", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleL2.png')");
    this._addCss("Button.btn_WF_ShuttleL2", "image", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleL2_P.png')");
    this._addCss("Button.btn_WF_ShuttleL2", "image", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleL2_D.png')");
    this._addCss("Button.btn_WF_ShuttleL2", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleU.png')");
    this._addCss("Button.btn_WF_ShuttleU", "image", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleU_P.png')");
    this._addCss("Button.btn_WF_ShuttleU", "image", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleU_D.png')");
    this._addCss("Button.btn_WF_ShuttleU", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleD.png')");
    this._addCss("Button.btn_WF_ShuttleD", "image", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleD_P.png')");
    this._addCss("Button.btn_WF_ShuttleD", "image", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_ShuttleD_D.png')");
    this._addCss("Button.btn_WF_ShuttleD", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_BF_Location.png')");
    this._addCss("Button.btn_BF_Location", "image", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPagePreviousP_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPagePreviousP", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPagePreviousP_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPagePreviousP", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPagePreviousP_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPagePreviousP", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPagePreviousP_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPagePreviousP", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPagePrevious_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPagePrevious", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPagePrevious_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPagePrevious", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPagePrevious_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPagePrevious", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPagePrevious_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPagePrevious", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPageNextP_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPageNextP", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPageNextP_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPageNextP", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPageNextP_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPageNextP", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPageNextP_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPageNextP", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPageNext_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPageNext", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPageNext_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPageNext", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPageNext_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPageNext", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdPageNext_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdPageNext", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdInitialization_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdInitialization", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdInitialization_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdInitialization", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdInitialization_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdInitialization", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdInitialization_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdInitialization", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdSellfixed_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdSellfixed", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdSellfixed_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdSellfixed", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdSellfixed_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdSellfixed", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdSellfixed_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdSellfixed", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdChange_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdChange", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdChange_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdChange", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdChange_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdChange", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdChange_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdChange", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdChangeEdit_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdChangeEdit", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdChangeEdit_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdChangeEdit", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdChangeEdit_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdChangeEdit", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdChangeEdit_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdChangeEdit", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdChangeExcel_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdChangeExcel", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdChangeExcel_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdChangeExcel", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdChangeExcel_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdChangeExcel", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdChangeExcel_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdChangeExcel", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdResize_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdResize", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdResize_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdResize", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdResize_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdResize", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdResize_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdResize", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdSave_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdSave", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdSave_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdSave", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdSave_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdSave", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdSave_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdSave", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdSort_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdSort", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdSort_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdSort", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdSort_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdSort", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdSort_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdSort", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdSearch_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdSearch", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdSearch_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdSearch", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdSearch_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdSearch", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdSearch_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdSearch", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdFilter_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdFilter", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdFilter_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdFilter", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdFilter_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdFilter", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdFilter_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdFilter", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdDown_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdDown", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdDown_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdDown", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdDown_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdDown", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_GrdDown_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdDown", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://img/btn_WF_ListUp_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_ListUp", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://img/btn_WF_ListUp_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_ListUp", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://img/btn_WF_ListUp_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_ListUp", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://img/btn_WF_ListUp_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_ListUp", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://img/btn_WF_ListDown_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_ListDown", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://img/btn_WF_ListDown_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_ListDown", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://img/btn_WF_ListDown_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_ListDown", "background", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://img/btn_WF_ListDown_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_ListDown", "background", obj, ["disabled"]);

    obj = new nexacro.Style_font("bold 12 Dotum");
    this._addCss("Static.styFormTitle", "font", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_FormHelpTitle", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_FormTitle", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_padding("10 0 0 10");
    this._addCss("Static.styFormTitle", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_FormHelpTitle", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_FormTitle", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_color("#3b3f4c");
    this._addCss("Static.styFormTitle", "color", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_FormHelpTitle", "color", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_FormTitle", "color", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_value("pointer");
    this._addCss("Button.btn_FormHelpTitle", "cursor", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_Question.png')");
    this._addCss("Button.btn_FormHelpTitle", "image", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_align("righttext middle");
    this._addCss("Button.btn_FormHelpTitle", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_FormTitle", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_Subtitle.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_Subtitle", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 2 17");
    this._addCss("Static.sta_WF_Subtitle", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_Subtitle02.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_Subtitle02", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#404040");
    this._addCss("Static.sta_WF_GrdTotal", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#454545");
    this._addCss("Static.sta_WF_GrdPage", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#3051b0");
    this._addCss("Static.sta_WF_GrdPageS", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("underline 9 Dotum");
    this._addCss("Static.sta_WF_GrdPageS", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("antialias 21 Malgun Gothic");
    this._addCss("Static.sta_POP_Text1", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_Desc01.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_Desc01", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 0 9");
    this._addCss("Static.sta_WF_Desc01", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Desc02", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_Desc02.png","","0","0","0","0","true");
    this._addCss("Static.sta_WF_Desc02", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("4");
    this._addCss("Static.sta_WF_Desc02", "linespace", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_Info.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_Info", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 0 17");
    this._addCss("Static.sta_WF_Info", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_ErrorImg01.png","","0","0","50","50","true");
    this._addCss("Static.sta_WF_ErrorImg01", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_ErrorImg02.png","","0","0","50","50","true");
    this._addCss("Static.sta_WF_ErrorImg02", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#2279c8");
    this._addCss("Static.sta_WF_ErrorTitle", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("18 Dotum");
    this._addCss("Static.sta_WF_ErrorTitle", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#777777ff","","0","none","","","1","solid","#d3d3d5ff","","0","none","","");
    this._addCss("Static.sta_WF_Errorbox", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#f15a21");
    this._addCss("Static.sta_WF_ErrorText1", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Static.sta_WF_ErrorText2", "linespace", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#fff0e7ff","img::btn_WF_SearchSmall.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_SearchSmallE", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#faeedaff","img::btn_WF_SearchSmall.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_SearchSmallE", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("#ebebebff","img::btn_WF_SearchSmall_D.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_SearchSmallE", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","img::btn_WF_MultiSmall.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_MultiSmall", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","solid","#bdbdbdff","");
    this._addCss("Button.btn_WF_MultiSmall", "border", obj, ["normal"]);
    this._addCss("Button.btn_WF_CalculatorSmall", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","img::btn_WF_MultiSmall.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_MultiSmall", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #dfdfdf");
    this._addCss("Button.btn_WF_MultiSmall", "gradation", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_WF_CalculatorSmall", "gradation", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #dfdfdf 0,100 #ffffff");
    this._addCss("Button.btn_WF_MultiSmall", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_CalculatorSmall", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_background("#ebebebff","img::btn_WF_MultiSmall_D.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_MultiSmall", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","img::btn_WF_CalculatorSmall.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_CalculatorSmall", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","img::btn_WF_CalculatorSmall.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_CalculatorSmall", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("#ebebebff","img::btn_WF_CalculatorSmall_D.png","","0","0","50","50","true");
    this._addCss("Button.btn_WF_CalculatorSmall", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#edeee6ff","","","0","0","0","0","true");
    this._addCss("Static.sta_GID_Title", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#c6c6c5ff","");
    this._addCss("Static.sta_GID_Title", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#5300dc");
    this._addCss("Static.sta_GID_txt", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#fb7b7b7a","","","0","0","0","0","true");
    this._addCss("Static.sta_GID_box", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://beforeDesign/img_WF_Order.png","stretch","52","0","0","0","true");
    this._addCss("Static.sta_WF_Order", "background", obj, ["normal", "disabled", "selected", "mouseover", "pushed"]);

    obj = new nexacro.Style_font("bold 13 malgun gothic");
    this._addCss("Static.sta_WF_OrderCount", "font", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#2c4898ff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_ProcessLine", "background", obj, ["normal", "selected", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_background("","theme://beforeDesign/img_WF_ProcessLine2.png","stretch","20","20","0","0","true");
    this._addCss("Static.sta_WF_ProcessLine2", "background", obj, ["normal", "selected", "disabled", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffd600 0,100 #f9b700");
    this._addCss("Static.sta_WF_ProcessBullet", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e39b02ff","");
    this._addCss("Static.sta_WF_ProcessBullet", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","16","16","true","true","true","true");
    this._addCss("Static.sta_WF_ProcessBullet", "bordertype", obj, ["normal", "disabled", "selected", "mouseover", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #918671 0,100 #585145");
    this._addCss("Static.sta_WF_ProcessBullet", "gradation", obj, ["disabled", "selected", "mouseover", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#585145ff","");
    this._addCss("Static.sta_WF_ProcessBullet", "border", obj, ["disabled", "selected", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://beforeDesign/img_WF_Creation.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Creation", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_font("bold 10 Gulim");
    this._addCss("Button.btn_WF_Creation", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 26");
    this._addCss("Button.btn_WF_Creation", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://beforeDesign/btn_WF_Process1.png","stretch","0","0","0","0","true");
    this._addCss("Button.btn_WF_Process1", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_padding("0 0 0 14");
    this._addCss("Button.btn_WF_Process1", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Process2", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Process6", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://beforeDesign/btn_WF_Process1_D.png","stretch","0","0","0","0","true");
    this._addCss("Button.btn_WF_Process1", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://beforeDesign/btn_WF_Process2.png","stretch","0","0","0","0","true");
    this._addCss("Button.btn_WF_Process2", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://beforeDesign/btn_WF_Process2_D.png","stretch","0","0","0","0","true");
    this._addCss("Button.btn_WF_Process2", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://beforeDesign/btn_WF_Process3.png","stretch","0","0","0","0","true");
    this._addCss("Button.btn_WF_Process3", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_padding("0 0 8 14");
    this._addCss("Button.btn_WF_Process3", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Process4", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Process5", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://beforeDesign/btn_WF_Process3_D.png","stretch","0","0","0","0","true");
    this._addCss("Button.btn_WF_Process3", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://beforeDesign/btn_WF_Process4.png","stretch","27","0","0","0","true");
    this._addCss("Button.btn_WF_Process4", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://beforeDesign/btn_WF_Process4_D.png","stretch","27","0","0","0","true");
    this._addCss("Button.btn_WF_Process4", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://beforeDesign/btn_WF_Process5.png","stretch","27","0","0","0","true");
    this._addCss("Button.btn_WF_Process5", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://beforeDesign/btn_WF_Process5_D.png","stretch","27","0","0","0","true");
    this._addCss("Button.btn_WF_Process5", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://beforeDesign/btn_WF_Process6.png","stretch","0","0","0","0","true");
    this._addCss("Button.btn_WF_Process6", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://beforeDesign/btn_WF_Process6_D.png","stretch","0","0","0","0","true");
    this._addCss("Button.btn_WF_Process6", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#83ac5aff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_ProcessCount", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_border("1","solid","#538521ff","");
    this._addCss("Button.btn_WF_ProcessCount", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("round","1","1","true","true","true","true");
    this._addCss("Button.btn_WF_ProcessCount", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_font("bold 9 malgun gothic");
    this._addCss("Button.btn_WF_ProcessCount", "font", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("#97a48bff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_ProcessCount", "background", obj, ["disabled"]);

    obj = new nexacro.Style_font("bold 9 10 malgun gothic");
    this._addCss("Button.btn_WF_ProcessCount", "font", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://beforeDesign/sta_WF_maintit1.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_maintit1", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 0 4 10");
    this._addCss("Static.sta_WF_maintit1", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_font("bold 12 malgun gothic");
    this._addCss("Static.sta_WF_maintit1", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_color("#004a70");
    this._addCss("Static.sta_WF_maintit1", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_font("11 malgun gothic");
    this._addCss("Static.sta_WF_GrdTotal", "font", obj, ["normal"]);

    obj = new nexacro.Style_background("#bcbcbcff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_SearchText", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#a8a8a8ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Static.sta_WF_SearchText", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("1 0 0 19");
    this._addCss("Static.sta_WF_SearchText", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("@gradation","theme://beforeDesign/btn_WF_DivClose_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_main_fold", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_T.png","","0","0","0","0","true");
    this._addCss("Button.btn_T", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_T_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_T", "background", obj, ["focused", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_T_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_T", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/btn_mega_menu.png","","0","0","0","0","true");
    this._addCss("Button.btn_menu", "background", obj, ["normal", "disabled", "focused", "mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btnPrev_off.png","","0","0","0","0","true");
    this._addCss("Button.btnPrev", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btnPrev_on.png","","0","0","0","0","true");
    this._addCss("Button.btnPrev", "background", obj, ["focused", "mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btnNext_off.png","","0","0","0","0","true");
    this._addCss("Button.btnNext", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btnNext_on.png","","0","0","0","0","true");
    this._addCss("Button.btnNext", "background", obj, ["focused", "mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_MdiList_off.png","","0","0","0","0","true");
    this._addCss("Button.btn_MdiList", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_MdiList_on.png","","0","0","0","0","true");
    this._addCss("Button.btn_MdiList", "background", obj, ["focused", "mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_ComInit_off.png","","0","0","0","0","true");
    this._addCss("Button.btn_ComInit", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_ComInit_on.png","","0","0","0","0","true");
    this._addCss("Button.btn_ComInit", "background", obj, ["focused", "mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_ComSrch_off.png","","0","0","0","0","true");
    this._addCss("Button.btn_ComSrch", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_ComSrch_on.png","","0","0","0","0","true");
    this._addCss("Button.btn_ComSrch", "background", obj, ["focused", "mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_ComSave_off.png","","0","0","0","0","true");
    this._addCss("Button.btn_ComSave", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_ComSave_on.png","","0","0","0","0","true");
    this._addCss("Button.btn_ComSave", "background", obj, ["focused", "mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_ComNew_off.png","","0","0","0","0","true");
    this._addCss("Button.btn_ComNew", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_ComNew_on.png","","0","0","0","0","true");
    this._addCss("Button.btn_ComNew", "background", obj, ["focused", "mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_ComDel_off.png","","0","0","0","0","true");
    this._addCss("Button.btn_ComDel", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_ComDel_on.png","","0","0","0","0","true");
    this._addCss("Button.btn_ComDel", "background", obj, ["focused", "mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_ComPrint_off.png","","0","0","0","0","true");
    this._addCss("Button.btn_ComPrint", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_ComPrint_on.png","","0","0","0","0","true");
    this._addCss("Button.btn_ComPrint", "background", obj, ["focused", "mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_ComMyMenu_off.png","","0","0","0","0","true");
    this._addCss("Button.btn_ComMyMenu", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_ComMyMenu_on.png","","0","0","0","0","true");
    this._addCss("Button.btn_ComMyMenu", "background", obj, ["focused", "mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_Remote_off.png","","0","0","0","0","true");
    this._addCss("Button.btn_Remote", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_Remote_on.png","","0","0","0","0","true");
    this._addCss("Button.btn_Remote", "background", obj, ["focused", "mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_ComClose_off.png","","0","0","0","0","true");
    this._addCss("Button.btn_ComClose", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_ComClose_on.png","","0","0","0","0","true");
    this._addCss("Button.btn_ComClose", "background", obj, ["focused", "mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_NaviIcon_off.png","","0","0","0","0","true");
    this._addCss("Button.btn_NaviIcon", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_NaviIcon_on.png","","0","0","0","0","true");
    this._addCss("Button.btn_NaviIcon", "background", obj, ["focused", "mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_open_off.png","","0","0","0","0","true");
    this._addCss("Button.btn_Fold_Open", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_open_on.png","","0","0","0","0","true");
    this._addCss("Button.btn_Fold_Open", "background", obj, ["focused", "mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_close_off.png","","0","0","0","0","true");
    this._addCss("Button.btn_Fold_Close", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_close_on.png","","0","0","0","0","true");
    this._addCss("Button.btn_Fold_Close", "background", obj, ["focused", "mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/img_WF_E.png')");
    this._addCss("Button.btn_MDI_TabCloseS", "image", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_TabCloseN", "image", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#888c96ff","","1","solid","#888c96ff","","0","solid","#ffffffff","","0","solid","#888c96ff","");
    this._addCss("Button.btn_MDI_TabCloseS", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("#d8dadfff","","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_TabCloseN", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_TabN", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#888c96ff","","1","solid","#888c96ff","","0","solid","#888c96ff","","0","solid","#888c96ff","");
    this._addCss("Button.btn_MDI_TabCloseN", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#888c96ff","","0","solid","#888c96ff","","1","solid","#ffffffff","","1","solid","#888c96ff","");
    this._addCss("Button.btn_MDI_TabS", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_font("bold 10 malgun gothic");
    this._addCss("Button.btn_MDI_TabS", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_TabN", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#888c96ff","","0","solid","#888c96ff","","1","solid","#888c96ff","","1","solid","#888c96ff","");
    this._addCss("Button.btn_MDI_TabN", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_color("#676767");
    this._addCss("Button.btn_MDI_TabN", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("#fcf7efff","theme://img/img_WF_Essential.png","","0","0","0","0","true");
    this._addCss("Combo.cbo_default_e", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_border("1","solid","#eda649ff","");
    this._addCss("Combo.cbo_default_e", "border", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("#ebebebff","theme://img/img_WF_Essential_D.png","","0","0","0","0","true");
    this._addCss("Combo.cbo_default_e", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://img/img_WF_EssentialCheckBox.png","","0","0","0","0","true");
    this._addCss("CheckBox.chk_default_e", "buttonbackground", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_EssentialCheck.png')");
    this._addCss("CheckBox.chk_default_e", "buttonimage", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://img/img_WF_RadioBg.png","","0","0","0","0","true");
    this._addCss("CheckBox.chk_default_new", "buttonbackground", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_Radio.png')");
    this._addCss("CheckBox.chk_default_new", "buttonimage", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_ListRight_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdVisibleBtns_A", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_ListLeft_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_GrdVisibleBtns_N", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_Renewal2", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#4d7990ff","");
    this._addCss("Static.sta_WF_Renewal2", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","true","true");
    this._addCss("Static.sta_WF_Renewal2", "bordertype", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_shadow("outer 1,1 2 #e1e1e1ff");
    this._addCss("Static.sta_WF_Renewal2", "shadow", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_BF_AlertMessage_N.png","","0","0","50","50","true");
    this._addCss("Button.btn_BF_AlertMessage", "background", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_value("50%");
    this._addCss("Button.btn_BF_AlertMessage", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_TF_UserSetting", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_background("#4d7990ff","","","0","0","0","0","true");
    this._addCss("Static.sta_LF_Bg", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#31596bff","","0","none","","","0","none","","");
    this._addCss("Static.sta_LF_Bg", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/pdiv_TF_MenuBg.png","stretch","5","5","0","0","true");
    this._addCss("PopupDiv.pdiv_TF_Menubg", "background", obj, ["normal"]);

    obj = new nexacro.Style_shadow("outer 1,1 3 gray");
    this._addCss("PopupDiv.pdiv_TF_Menubg", "shadow", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_LeftMenuFA_N.png')");
    this._addCss("Button.btn_WF_LeftMenuFA", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_LeftMenuFA_O.png')");
    this._addCss("Button.btn_WF_LeftMenuFA", "image", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_LeftMenuFA_P.png')");
    this._addCss("Button.btn_WF_LeftMenuFA", "image", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/btn_TF_UserSetting_N.png","","0","0","50","50","true");
    this._addCss("Button.btn_TF_UserSetting", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_TF_UserSetting_O.png","","0","0","50","50","true");
    this._addCss("Button.btn_TF_UserSetting", "background", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_Home_N.png","","0","0","50","50","true");
    this._addCss("Button.btn_MDI_Home", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_Home_O.png","","0","0","50","50","true");
    this._addCss("Button.btn_MDI_Home", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_Home_P.png","","0","0","50","50","true");
    this._addCss("Button.btn_MDI_Home", "background", obj, ["pushed"]);

    obj = null;
    
//[add theme images]
  };
})();
