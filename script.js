function confirmPassword(){
  let password1=document.getElementById("passwordOne").value
  let password2=document.getElementById("passwordTwo").value
  let matchStatus1=document.getElementById("matchStatus")
  let matchStatus= "not matched";

  if((password1 == password2)&& (password1.length>6)&&(password2.length>6)){
    matchStatus= "password matched";

  }else {
    matchStatus="not matched";
  }
matchStatus1.className=matchStatus.toLowerCase();
matchStatus1.innerText=matchStatus;


}