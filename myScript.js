//function required(){  
//    var element = document.forms["form"]["text"].value;  
//    if (element == ""){  
//    alert("Please input a Value");  
//    return false;  
//    }else{  
//    alert('Code has accepted : you can try another');  
//    return true;   
//    }  
//} 
//function validateForm() {
//    var x = document.forms["myForm"]["fname"].value;
//    if (x == null || x == "") {
//        alert("Name must be filled out");
//        return false;
//    }
//}
 var frmvalidator = new Validator("myform");
 frmvalidator.addValidation("FirstName","req","Please enter your First Name");
 frmvalidator.addValidation("FirstName","maxlen=20",
        "Max length for FirstName is 20");
 
 frmvalidator.addValidation("LastName","req");
 frmvalidator.addValidation("LastName","maxlen=20");
 
 frmvalidator.addValidation("Email","maxlen=50");
 frmvalidator.addValidation("Email","req");
 frmvalidator.addValidation("Email","email");
 
 frmvalidator.addValidation("Phone","maxlen=50");
 frmvalidator.addValidation("Phone","numeric");
 
 frmvalidator.addValidation("Address","maxlen=50");
 frmvalidator.addValidation("Country","dontselect=000");
function DoCustomValidation()
{
  var frm = document.forms["myform"];
  if(frm.pwd1.value != frm.pwd2.value)
  {
    sfm_show_error_msg('The Password and verified password does not match!',frm.pwd1);
    return false;
  }
  else
  {
    return true;
  }
}
function DoCustomValidation()
{
  var frm = document.forms["myform"];
  if(false == DoMyValidationOne())
  {
    sfm_show_error_msg('Validation One Failed!');
    return false;
  }
  else
  if(false == DoMyValidationTwo())
  {
    sfm_show_error_msg('Validation Two Failed!');
    return false;
  }
  else
  {
    return true;
  }
}
