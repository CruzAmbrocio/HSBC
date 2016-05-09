/**
 * @module File0d32c926bef454b
 *
 * @author Cruz Ambrocio <cruzambrocio1409@gmail.com>
 */

/*
function filter(){
  var pForm = kony.application.getCurrentForm();
  var vlue =pForm.txtInputsearch.text;
  var array = pForm.FlexScrollContainer03f3a22eaf1ef42.children;
  pForm.HOLa.text=vlue;
  alert(pForm.flx7);
}
*/

var array=[];
var arrayName=[];
var errorBug=false;
//calkled in txtchange input :::: 
function callFilter(resul){
	iterationItems(); 
}

function filter(resultd){
  var pForm = kony.application.getCurrentForm();
  var example = pForm[resultd];
    if (example!=null){
    array.push(example);
    //alert(array);
	//alert("hahahah");
    iterationItems();
  	}else{
      //alert(array);
      errorBug=true;
      //iterationItems();
      //alert("BUG");
    }
}

var numItemCon=0;
function iterationItems(){
  var pForm = kony.application.getCurrentForm();
  //alert(pForm.txtInputsearch.text);
  var nameCon="flx0";
  //array.push(nameCon);
  //alert(array);
  while(errorBug!=true){
	var resul=nameCon+numItemCon;
    //var initName="lblNameItem0";
    //var nameToSearch=pForm[resul][initName+numItemCon];
    //arrayName.push(nameToSearch);
	numItemCon++;
    filter(resul);
  if (errorBug==true){
    break;
  }
  }
}

/**
 * @function
 *
 */
function iteration(){
  var pForm = kony.application.getCurrentForm();
  for (i=0;i<array.length;i++) {

  var nameIterationItem="flx0";
  var nameLabelItem= "lblNameItem0";
    
  var valueInput=pForm.txtInputsearch.text;

  var nameComplet=nameIterationItem+i;
  var nameLabelComplet=nameLabelItem+i;

    //alert(nameComplet.parents);

      if (valueInput!==""){
      pForm[nameIterationItem+i].isVisible=false;
      	if(pForm[nameLabelComplet].text==valueInput){
          pForm[nameComplet].isVisible=true;
        }
      //alert("si llega");
    }else{
  	pForm[nameIterationItem+i].isVisible=true;
    //alert("esto si");
    }
    //alert(nameIterationItem+i);
  	
   // hacer algo con a[i];
}
}