/*
function loadSegData()
{
var pForm = kony.application.getCurrentForm();
alert(pForm.sgmDataOptions.widgetDataMap);
	segDataTab = [];
  	frmNews.segData.widgetDataMap = {lblTmplAboutData:"lblTmplAboutData","lblTmplAboutData1":"lblTmplAboutData1","lblTmplAboutData2":"lblTmplAboutData2","lblTmplAboutData3":"lblTmplAboutData3","lblTmplAboutData4":"lblTmplAboutData4","lblTmplAboutData5":"lblTmplAboutData5",imgArrow:"imgArrow",imgArrow2:"imgArrow2",imgArrow3:"imgArrow3","lblOpen":"lblOpen","lblHigh":"lblHigh","lblLow":"lblLow","lblOpenValue":"lblOpenValue","lblHighValue":"lblHighValue","lblLowValue":"lblLowValue","lblEPS":"lblEPS","lblMKTCap":"lblMKTCap","lblVolume":"lblVolume","lblEPSValue":"lblEPSValue","lblMKTCapValue":"lblMKTCapValue","lblVolumeValue":"lblVolumeValue","lbl52wklow":"lbl52wklow","lbl52wkhigh":"lbl52wkhigh","lblpe":"lblpe","lbl52wklowValue":"lbl52wklowValue","lbl52wkhighValue":"lbl52wkhighValue","lblpeValue":"lblpeValue"};
  	segDataTab = [
        {template:flxTmplLatest},
        {"lblTmplAboutData":"Former Apple CEO John Sculley shares the most important thing he learned...","lblTmplAboutData1":"Business Insider","imgArrow":"list_arrow.png","lblTmplAboutData2":"Apple's March-quarter iPhone guidance an overhang for stock","lblTmplAboutData3":"Yahoo Finance","imgArrow2":"list_arrow.png","lblTmplAboutData4":"Apple Watch takes up more than half the smart watch market","lblTmplAboutData5":"Business Daily","imgArrow3":"list_arrow.png",template:flxTmplNews},
      	{"lblLast":"Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops,  and sells consumer electronics, computer software and online services.",template:flxLastSection}
	];
 
  pForm.sgmDataOptions.data = segDataTab;
// frmNews.segData.pageSkin = "segTranspSkn";
  
}
*/
/*


Former Apple CEO Jihn Sculley shares the most impotant thing he learned...
bussiness Insider

Apple's March-quarter iPhone Guidance an overhangh for stock 
Yahoo Finance

Apple Watch Take Up More Than Half The Smartwatch Market
Bussines Daily



Apple Inc. is an American multinational technology company headquarted in Cupertino, California, that desings, develops, and sells consumers electronics, computer software, and online services.


*/


/*

function onSwipe_segData()
/*{
  		var selIndex = frmInfoNews.flxPrincipalInfoNews.flxContainerSegmentData.sgmDataOptions[1];
  		alert(selIndex);
  /*
		if(selIndex[1] == "0")
          {
            	frmInfoNews.flxPrincipalInfoNews.flxContainerLabel.lblChangeTitle.text  = "LATEST";
          }
		else if(selIndex[1] == 1)
          {
            	frmInfoNews.flxPrincipalInfoNews.flxContainerLabel.lblChangeTitle.text  = "NEWS";
          }
		else if(selIndex[1] == 2)
          {
            	frmInfoNews.flxPrincipalInfoNews.flxContainerLabel.lblChangeTitle.text = "ABOUT";
          }

  */
//}























































//  call init frmnews  :::   loadSegData();


// call oeswipe segdata  :::: onSwipe_segData();

/**
 * @module File07fa32e30760c40
 *
 * @author prakash gotukula <prakash.gotukula@kony.com>
 */


/**
 * @function
 *
 */
/*
function loadGlobalVariables()
{

		segDataTab = [];
  	

}

/**
 * @function
 *
 */
/*
function loadSegData()
{
var pForm = kony.application.getCurrentForm();
alert(pForm.segData.widgetDataMap);
		segDataTab = [];
 	
  		//frmNews.segData.widgetDataMap = {lblTmplAboutData:"lblTmplAboutData","lblTmplAboutData1":"lblTmplAboutData1","lblTmplAboutData2":"lblTmplAboutData2","lblTmplAboutData3":"lblTmplAboutData3","lblTmplAboutData4":"lblTmplAboutData4","lblTmplAboutData5":"lblTmplAboutData5",imgArrow:"imgArrow",imgArrow2:"imgArrow2",imgArrow3:"imgArrow3","lblOpen":"lblOpen","lblHigh":"lblHigh","lblLow":"lblLow","lblOpenValue":"lblOpenValue","lblHighValue":"lblHighValue","lblLowValue":"lblLowValue","lblEPS":"lblEPS","lblMKTCap":"lblMKTCap","lblVolume":"lblVolume","lblEPSValue":"lblEPSValue","lblMKTCapValue":"lblMKTCapValue","lblVolumeValue":"lblVolumeValue","lbl52wklow":"lbl52wklow","lbl52wkhigh":"lbl52wkhigh","lblpe":"lblpe","lbl52wklowValue":"lbl52wklowValue","lbl52wkhighValue":"lbl52wkhighValue","lblpeValue":"lblpeValue"};
  	segDataTab = [
          								//{"lblOpen":"Open","lblHigh":"High","lblLow":"Low","lblOpenValue":"16,398.56","lblHighValue":"16,396.56","lblLowValue":"16,987.87","lblEPS":"EPS","lblMKTCap":"MKT Cap","lblVolume":"Volume","lblEPSValue":"16,333.33","lblMKTCapValue":"16,398.5","lblVolumeValue":"16,398.25","lbl52wklow":"52wk Low","lbl52wkhigh":"52wk High","lblpe":"P/E","lbl52wklowValue":"16,333.33","lbl52wkhighValue":"16,333.33","lblpeValue":"16,333.33",template:flxTmplLatest},
          								//{"lblTmplAboutData":"Former Apple CEO John Sculley shares the most important thing he learned...","lblTmplAboutData1":"Business Insider","imgArrow":"list_arrow.png","lblTmplAboutData2":"Apple's March-quarter iPhone guidance an overhang for stock","lblTmplAboutData3":"Yahoo Finance","imgArrow2":"list_arrow.png","lblTmplAboutData4":"Apple Watch takes up more than half the smart watch market","lblTmplAboutData5":"Business Daily","imgArrow3":"list_arrow.png",template:flxTmplNews},
      									{"lblLast":"Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops,  and sells consumer electronics, computer software and online services.",template:flxLastSection}
    									
        						];
 
  			
  
  pForm.sgmDataOptions.data = segDataTab;
// frmNews.segData.pageSkin = "segTranspSkn";
  
}


/**
 * @function
 *
 */

/**
 * @function
 *
 */

function onSwipe_segData(){
	var pForm = kony.application.getCurrentForm();
  	var selIndex = pForm.flxScrollTest.contentOffsetMeasured.x;
    var parsed = parseInt(selIndex);
	//alert(selIndex);
		if(parsed >= 0 && parsed <230)
          {
            //alert("ASEFASDFASDASDFJAKSFL");
            pForm.sasasa.text = "LATEST";
          }
		else if(parsed > 230 && parsed < 400)
          {
            pForm.sasasa.text = "NEWS";
          }
		else if(parsed > 400)
          {
            pForm.sasasa.text = "ABOUT";
          }

}


/*


Former Apple CEO Jihn Sculley shares the most impotant thing he learned...
bussiness Insider

Apple's March-quarter iPhone Guidance an overhangh for stock 
Yahoo Finance

Apple Watch Take Up More Than Half The Smartwatch Market
Bussines Daily



Apple Inc. is an American multinational technology company headquarted in Cupertino, California, that desings, develops, and sells consumers electronics, computer software, and online services.


*/