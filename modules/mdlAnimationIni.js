/**
 * @module File0f690e0a10f904f
 *
 * @author Cruz Ambrocio <cruzambrocio1409@gmail.com>
 ***  Animation Splash of init   ***
 */





/*
this call in add sniped in the principal form in init action
  frmSplash.flxPrincipalSplash.imgFirstIconSplash.opacity = 1;
  frmSplash.flxPrincipalSplash.imgSecondIconSplash.opacity = 0;
  frmSplash.flxPrincipalSplash.flxFormLogin.opacity = 0;
  frmSplash.flxPrincipalSplash.flxContainerSkip.opacity = 0;
  
  
call the function animateLoginForm(); in principal form in post show action

*/
function animateLoginForm() {
  
  var pForm = kony.application.getCurrentForm();
  try {
    pForm.imgFirstIconSplash.animate(
      kony.ui.createAnimation(
        {"100":
         {"stepConfig":
          {"timingFunction":kony.anim.EASE
          },
          "opacity": 0
         }
        } 
      ),
      {"delay":0.75,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1},
      {"animationEnd" : function(){
      }
      }
    );

    pForm.imgSecondIconSplash.animate(
      kony.ui.createAnimation(
        {"100":
         {"stepConfig":
          {"timingFunction":kony.anim.EASE
          },
          "opacity": 1
         }
        } 
      ),
      {"delay":0.5,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1},
      {"animationEnd" : function(){
      }
      }
    );

    pForm.flxFormLogin.animate(
      kony.ui.createAnimation(
        {"100":
         {"stepConfig":
          {"timingFunction":kony.anim.EASE
          },
          "opacity": 1
         }
        } 
      ),
      {"delay":0.5,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1},
      {"animationEnd" : function(){
      }
      }
    );

    pForm.flxContainerSkip.animate(
      kony.ui.createAnimation(
        {"100":
         {"stepConfig":
          {"timingFunction":kony.anim.EASE
          },
          "opacity": 1
         }
        } 
      ),
      {"delay":0.5,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1},
      {"animationEnd" : function(){
      }
      }
    );
  } catch (e) {
  }
}



function trancitionIndicator(distance, form){
 var pForm = kony.application.getCurrentForm();
 try {
   pForm[form].animate(
   kony.ui.createAnimation(
   {"100":{
     "left": distance, "stepConfig":{
       "timingFunction": kony.anim.EASE
         }
     }
   }
   ),
     {"delay": 0, "iterationCount": 1, "fillMode": kony.anim.FILL_MODE_FORWARDS, "duration":0.2},
     {"animationEnd": function(){ }
     }
    );
 } catch (e) {
 }
}