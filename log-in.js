function getName(){
const uname = document.getElementById('userName').value;

sessionStorage.setItem("NAME" , uname);
return;
}