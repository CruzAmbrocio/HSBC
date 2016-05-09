function AS_Label_144038e1ac784e789fca4a8aa27b1358(eventobject, x, y) {
    var activeU = "flxUnderLine01";
    var hideU1 = "flxUnderLine02";
    var hideU2 = "flxUnderLine03";
    changeActiveHeader(activeU, hideU1, hideU2);
    //frmStockMarket.flxSliderStock.setContentOffset({x:"0%",y:"0"},true);
    trancitionIndicator("0%", "flxMasterScrollStock");
    trancitionIndicator("100%", "flxContainerTopGainers");
    trancitionIndicator("100%", "flxContainerDiscover");
}