const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", function(){

const email = document.querySelector('input[type="email"]').value;
const password = document.querySelector('input[type="password"]').value;

if(email === "" || password === "") {
alert("Please enter email and password");
return;
}

window.location.href = "today.html";

});