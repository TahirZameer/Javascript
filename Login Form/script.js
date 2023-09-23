let signin = document.getElementById('btn-signin');
let signup = document.getElementById('btn-signup');

let nameField = document.getElementById('btn-nameField');
let title = document.getElementById('btn-title');

signin.onclick = function(){
	nameField.style.maxHeight = '0';
	
	title.innerHTML = "Sign In";
	signup.classList.add("disable");
	signin.classList.remove("disable");
}

signup.onclick = function(){
	nameField.style.maxHeight = '60px';
	
	title.innerHTML = "Sign Up";
	signup.classList.remove("disable");
	signin.classList.add("disable");
}

