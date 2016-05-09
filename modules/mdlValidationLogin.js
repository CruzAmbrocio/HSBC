function validLogin(){
  var pForm = kony.application.getCurrentForm();
  
  var userName=pForm.txBoxUserName.text;
  var password=pForm.txtBoxPassword.text;
  if (userName == "hi" && password=="hello"){
    frmStockMarket.show();
  }else{
    alert("User Name or Password Fail");
  }
}
