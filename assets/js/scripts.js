function validateSignupInputs()
{
	var firstName = document.getElementById('firstN').value;
	var lastName = document.getElementById('lastN').value;
	var email = document.getElementById('signUpEmail').value;
	var phone = document.getElementById('signUpPhone').value;
	if(firstName=="")
	{
		alert("Error: Please enter your first name!");
	}
    else if(lastName==""){
		alert("Error: Please enter your last name!");        
    }

	else if(email=="")
	{
		alert("Error: Please enter your email address!");
	}
	else if(phone.length!=10)
	{
		alert("Error: Please enter a valid phone number!");
	}
}
var slideIndex = 1;
show(slideIndex);

function plus(n) {
  show(slideIndex += n);
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
