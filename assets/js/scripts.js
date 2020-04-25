function getHashData(){
    var rawPass = document.getElementById('loginPassword').value;
    var hashPass = md5(rawPass);
    validateUser(hashPass);
    return hashPass;

}
function validateUser(pass){
    if (document.getElementById('loginUsername').value == "admin" && pass == "9b599faac222a0dfcfab49148ce40c26") {
        var elem = document.getElementById("id_loginmen");
        elem.remove();
        alert("WORKED");
    }
}
var slideIndex = 1;
showDivs(slideIndex);

function plus(n) {
  showDivs(slideIndex += n);
}

function show(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";   
}
