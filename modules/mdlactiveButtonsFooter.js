function changeActive(active,hide, hide1, hide2, hide3, hide4, show1, show2, show3, show4){
    var pForm = kony.application.getCurrentForm();
	pForm[active].isVisible=true;
  	pForm[hide].isVisible=false;

  	pForm[hide1].isVisible=false;
    pForm[hide2].isVisible=false;
    pForm[hide3].isVisible=false;
    pForm[hide4].isVisible=false;
  
    pForm[show1].isVisible=true;
    pForm[show2].isVisible=true;
    pForm[show3].isVisible=true;
    pForm[show4].isVisible=true;
}




function changeActiveHeader(activeU,hideU, hideU1){
    var pForm = kony.application.getCurrentForm();
	pForm[activeU].isVisible=true;
  	pForm[hideU].isVisible=false;
  	pForm[hideU1].isVisible=false;

}