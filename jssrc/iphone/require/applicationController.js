define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("frmItuneSearch", "frmItuneSearch", "frmItuneSearchController");
        kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
        kony.application.setDefaultTextboxPadding(false);
        kony.application.setRespectImageSizeForImageWidgetAlignment(true);
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmItuneSearch").navigate();
    }
});