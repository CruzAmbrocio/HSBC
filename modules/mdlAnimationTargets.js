/**
 * @module File0f690e0a10f904f
 *
 * @author Cruz Ambrocio <cruzambrocio1409@gmail.com>
 */

var positionMatrix = [{w:"75%",t:"20%"},{w:"70%",t:"17%"},{w:"65%",t:"14%"},{w:"60%",t:"11%"},{w:"55%",t:"8%"}];

function moveStockBoxes(flexboxnumber,options){
	if(options===true){
      var centerX="150%";
      moveStockBoxesSelected(flexboxnumber,centerX);
    }else if(options===false){
      var centerXLeft="-150%";
      moveStockBoxesSelected(flexboxnumber,centerXLeft);
    }
}

function moveStockBoxesSelected(flexboxnumber,center){
  var pForm = kony.application.getCurrentForm();

  pForm["flxTarget"+flexboxnumber].animate(
        kony.ui.createAnimation({
           "100":{"centerX": center,
                  "stepConfig":{"timingFunction": kony.anim.EASE}}}),
        {"fillMode": kony.anim.FILL_MODE_FORWARDS,"duration": 0.5},
        {"animationEnd": function () {
        }}
    );
    switch(flexboxnumber) {
            case 1:
                var nameCase1="flxTarget2";
                pForm[nameCase1].animate(
                  kony.ui.createAnimation({
                    "100":{"width": "75%",
                           "top":"20%",
                           "stepConfig":{"timingFunction": kony.anim.EASEIN}}}),
                  {"delay":0,"fillMode": kony.anim.FILL_MODE_FORWARDS,"duration": 0.4},
                  {"animationEnd": function () {
                   var suma="flxTarget"+flexboxnumber+1;
          //pForm[suma].skin = sknFlexWhite;
            var tar3="flxTarget3";
                  pForm[tar3].width = "70%";
                  pForm[tar3].top = "17%";
            var tar4="flxTarget4";
                  pForm[tar4].width = "65%";
                  pForm[tar4].top = "14%"; 
          	var tar5="flxTarget5";
                  pForm[tar5].width = "60%";
                  pForm[tar5].top = "11%"; 
                  }}
                );
            

                break;
            case 2:
            var nameCase2="flxTarget3";
               pForm[nameCase2].animate(
                  kony.ui.createAnimation({
                    "100":{"width": "75%",
                           "top":"20%",
                           "stepConfig":{"timingFunction": kony.anim.EASEIN}}}),
                  {"delay":0,"fillMode": kony.anim.FILL_MODE_FORWARDS,"duration": 0.4},
                  {"animationEnd": function () {
          //pForm["flxTarget"+(flexboxnumber+1)].skin = sknFlexWhite;
          var other4="flxTarget4";
                  pForm[other4].width = "70%";
                  pForm[other4].top = "17%";
          var other5="flxTarget5";
                  pForm[other5].width = "65%";
                  pForm[other5].top = "14%";
                  }}
                );
            
                
                break;
            case 3:
                var nameCase3="flxTarget4";
                pForm[nameCase3].animate(
                  kony.ui.createAnimation({
                     "100":{"top":"20%",
                        "width":"75%",
                           "stepConfig":{"timingFunction": kony.anim.EASEIN}}}),
                  {"delay":0,"fillMode": kony.anim.FILL_MODE_FORWARDS,"duration": 0.4},
                  {"animationEnd": function () {
                    //frmScroll["flxTarget"+(flexboxnumber+1)].skin = sknFlexWhite;
          var find5="flxTarget5";
                  pForm[find5].width = "65%";
                  pForm[find5].top = "14%"; 
                  }}
                );
            
                break;
            case 4:
                var nameCase4="flxTarget5";
                pForm[nameCase4].animate(
                  kony.ui.createAnimation({
                     "100":{"top":"20%",
                        "width":"75%",
                           "stepConfig":{"timingFunction": kony.anim.EASEIN}}}),
                  {"delay":0,"fillMode": kony.anim.FILL_MODE_FORWARDS,"duration": 0.4},
                  {"animationEnd": function () {
                    //frmScroll["flxTarget"+(flexboxnumber+1)].skin = sknFlexWhite;
                  }}
                );
                break;
            case 4:
                break;   
           }
  //frmScroll.tinderbox.centerX = "150%";
}

/**
 * @function
 *
 */
function setGesturestoStocks(){
  var setupTblSwipe = {fingers: 1};
  frmStockMarket.flxTarget1.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE,setupTblSwipe, mySwipe1);
  frmStockMarket.flxTarget2.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE,setupTblSwipe, mySwipe2);
  frmStockMarket.flxTarget3.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE,setupTblSwipe, mySwipe3);
  frmStockMarket.flxTarget4.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE,setupTblSwipe, mySwipe4);
  frmStockMarket.flxTarget5.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE,setupTblSwipe, mySwipe5);
}
function mySwipe1(src,gestureInformationSwipe){
 //alert("hoaasd"+src);
  var hold = false;
  if(gestureInformationSwipe.swipeDirection==2){
    hold = true;
     moveStockBoxes(1,hold);
  }else{
    hold = false;
     moveStockBoxes(1,hold);
  }
}

function mySwipe2(src,gestureInformationSwipe){
  //alert("hoaasd"+src);
  var hold=false;
  if(gestureInformationSwipe.swipeDirection==2){
    hold=true;
      moveStockBoxes(2,hold);
  }else{
    hold=false;
      moveStockBoxes(2,hold);
  }

}
function mySwipe3(src,gestureInformationSwipe){
  //alert("hoaasd"+src);
  var hold=false;
  if(gestureInformationSwipe.swipeDirection==2){
    hold=true;
    moveStockBoxes(3,hold);
  }else{
    hold=false;
    moveStockBoxes(3,hold);
  }
  
}
function mySwipe4(src,gestureInformationSwipe){
 // alert("hoaasd"+src);
  var hold=false;
  if(gestureInformationSwipe.swipeDirection==2){
    hold=true;
    moveStockBoxes(4,hold);
  }else{
    hold=false;
    moveStockBoxes(4,hold);
  }
  
}
function mySwipe5(src,gestureInformationSwipe){
  //alert("hoaasd"+src);
  var hold=false;
  if(gestureInformationSwipe.swipeDirection==2){
    hold=true;
    moveStockBoxes(5,hold);
  }else{
    hold=false;
    moveStockBoxes(5,hold);
  }
  
}
 

