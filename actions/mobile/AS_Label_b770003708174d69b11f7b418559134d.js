function AS_Label_b770003708174d69b11f7b418559134d(eventobject, x, y) {
    var activeU = "flxUnderLine02";
    var hide1U = "flxUnderLine01";
    var hide2U = "flxUnderLine03";
    changeActiveHeader(activeU, hide1U, hide2U);
    //frmStockMarket.flxSliderStock.setContentOffset({x:"100%",y:"0"},true);
    trancitionIndicator("-100%", "flxMasterScrollStock");
    trancitionIndicator("0%", "flxContainerTopGainers");
    trancitionIndicator("100%", "flxContainerDiscover");
}