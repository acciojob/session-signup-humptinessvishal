//your JS code here. If required.
const form = document.getElementsById("signup-form");


form.addEventListner("submit",(event)=>{
	event.preventDefault();
	const name = document.getElementsById("name").value;
	const email = document.getElementsById("email").value;
	const password = document.getElementsById("password").value;
	const confirmpassword = document.getElementsById("confirm-password").value;
	if(password === confirmpassword){
		sessionStorage.setItem("name", name);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("password", password);
		
		alert("Sign up successful!");
	} else{
		alert{"Passwords do not match"};
	};
});



