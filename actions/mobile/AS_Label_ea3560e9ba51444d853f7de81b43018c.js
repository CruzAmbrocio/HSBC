function AS_Label_ea3560e9ba51444d853f7de81b43018c(eventobject, x, y) {
    var activeU = "flxUnderLine03";
    var hide1U = "flxUnderLine01";
    var hide2U = "flxUnderLine02";
    changeActiveHeader(activeU, hide1U, hide2U);
    //frmStockMarket.flxSliderStock.setContentOffset({x:"300%",y:"0"},true);
    trancitionIndicator("-100%", "flxMasterScrollStock");
    trancitionIndicator("-100%", "flxContainerTopGainers");
    trancitionIndicator("0%", "flxContainerDiscover");
}