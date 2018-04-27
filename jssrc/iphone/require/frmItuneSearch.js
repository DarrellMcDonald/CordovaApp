define("frmItuneSearch", function() {
    return function(controller) {
        function addWidgetsfrmItuneSearch() {
            this.setDefaultUnit(kony.flex.DP);
            var CordovaBrowser0c049226fbddf48 = new kony.ui.CordovaBrowser({
                "detectTelNumber": true,
                "enableZoom": false,
                "height": "100%",
                "id": "CordovaBrowser0c049226fbddf48",
                "isVisible": true,
                "left": "0dp",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "requestURLConfig": {
                    "URL": "index.html",
                    "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
                }
            }, {}, {});
            this.add(CordovaBrowser0c049226fbddf48);
        };
        return [{
            "addWidgets": addWidgetsfrmItuneSearch,
            "enabledForIdleTimeout": false,
            "id": "frmItuneSearch",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});