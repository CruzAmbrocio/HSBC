/**
 * @module File0f690e0a10f904f
 *
 * @author Cruz Ambrocio <cruzambrocio1409@gmail.com>
 ***  Animation Add data at segment in news frm from Code   ***
 */

//called for frm init container in init action 
// post show frm init :::::frmNews.segData.onSwipe = onSwipe_segData;
//segData is segment of news
function loadSegData(){

	frmInfoNews.sgmSegment.widgetDataMap = {
      lblLast:"lblLast",
      "lblOpne":"lblOpne",
      "lblOpenValue":"lblOpenValue",
      "lblHigh":"lblHigh",
      "lblHighValue":"lblHighValue",
      "lblLow":"lblLow",
      "img1":"img1",
      "img2":"img2",
      "img3":"img3",
      "lblLowValue":"lblLowValue",
      "lblEPS":"lblEPS",
      "lblEPSValue":"lblEPSValue",
      "lblMKTCap":"lblMKTCap",
      "lblMKTCapValue":"lblMKTCapValue",
      "lblVolume":"lblVolume",
      "lblVolumeValue":"lblVolumeValue",
      "lbl52KWLow":"lbl52KWLow",
      "lbl52KWLowValue":"lbl52KWLowValue",
      "lbl52High":"lbl52High",
      "lbl52HighValue":"lbl52HighValue",
      "lblPE":"lblPE",
      "lblPEValue":"lblPEValue",
      "blTextBigOne":"blTextBigOne",
      "blTextSmallOne":"blTextSmallOne",
      "blTextBigTwo":"blTextBigTwo",
      "blTextSmallTwo":"blTextSmallTwo",
      "lblTextBigThree":"lblTextBigThree",
      "lblTextSmallThree":"lblTextSmallThree",
      "flxLineOneTempKA":"flxLineOneTempKA",
      "flxLineTwoTempKA":"flxLineTwoTempKA",
      "flxLineThreeTempKA":"flxLineThreeTempKA"};

	segDataTab = [
      {"lblOpen":"Open","lblOpenValue":"16,398.56",
       "lblHigh":"High","lblHighValue":"16,396.56",
       "lblLow":"Low","lblLowValue":"16,987.87",
       "lblEPS":"EPS","lblEPSValue":"16,333.33",
       "lblMKTCap":"MKT Cap","lblMKTCapValue":"16,398.5",
       "lblVolume":"Volume","lblVolumeValue":"16,398.25",
       "lbl52KWLow":"52wk Low","lbl52KWLowValue":"16,333.33",
       "lbl52KWHigh":"52wk High","lbl52KWHighValue":"16,333.33",
       "lblPE":"P/E","lblPEValue":"16,333.33",template:flxcontainer1},

      {"blTextBigOne":"Former Apple CEO John Sculley shares the most important thing he learned...",
       "blTextSmallOne":"Business Insider",
       "img3":"list_arrow.png",
       "blTextBigTwo":"Apple's March-quarter iPhone guidance an overhang for stock",
       "blTextSmallTwo":"Yahoo Finance",
       "img2":"list_arrow.png",
       "lblTextBigThree":"Apple Watch takes up more than half the smart watch market",
       "lblTextSmallThree":"Business Daily","img1":"list_arrow.png",template:flxtempDataImg},

      {"lblLast":"Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops,  and sells consumer electronics, computer software and online services.",template:flxLastSection}
	];

  	frmInfoNews.sgmSegment.data = segDataTab;
	//frmNews.segData.pageSkin = "segPageTransparent" ; 
	// frmNews.segData.pageSkin = "segTranspSkn";
}

//called in sgmSegment in onSwipe :::::onSwipe_seg();
function onSwipe_seg(seguiWidget, sectionIndex, rowIndex, isSelected){
  var pForm = kony.application.getCurrentForm();
  //rowIndex =2.0;
  //alert(pForm.sgmSegment.onSwipe.rowIndex);
  if(rowIndex == 0){
    pForm.sasasa.text = "LATEST";
  }else if(rowIndex == 1){
    pForm.sasasa.text = "NEWS";
  }else if(rowIndex == 2){
    pForm.sasasa.text = "ABOUT";
  }
}