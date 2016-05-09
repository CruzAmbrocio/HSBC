function onSwipe_Buttons(){
	var pForm = kony.application.getCurrentForm();
  	var selIndexBut = pForm.flxSliderStock.contentOffsetMeasured.x;
    var parse = parseInt(selIndexBut);
	//alert(selIndex);
		if(parse >= 0 && parse <230){
            //alert("ASEFASDFASDASDFJAKSFL");
            pForm.HOLa.text = "LATEST";
        }
		else if(parse > 230 && parse < 400){
            pForm.HOLa.text = "NEWS";
        }
		else if(parse > 400){
            pForm.HOLa.text = "ABOUT";
        }
}

function force(){
	var pForm = kony.application.getCurrentForm();
  	var selIndexBut = pForm.flxSliderStock.contentOffset.x;
	if (selIndexBut ==100){
    var activeU="flxUnderLine02";
    var hide1U="flxUnderLine01";
    var hide2U="flxUnderLine03";
    changeActiveHeader(activeU,hide1U, hide2U);
      
    }else if(selIndexBut ==0){
    var activeU1="flxUnderLine01";
    var hide1U1="flxUnderLine02";
    var hide2U1="flxUnderLine03";
    changeActiveHeader(activeU1,hide1U1, hide2U1);
    }else if (selIndexBut ==300){
    var activeU2="flxUnderLine03";
    var hide1U2="flxUnderLine01";
    var hide2U2="flxUnderLine02";
    changeActiveHeader(activeU2,hide1U2, hide2U2);
    }else{
      //alert("a fallado");
    }
}

