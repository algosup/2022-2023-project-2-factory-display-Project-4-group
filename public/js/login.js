function validate() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == "admin" && password == "admin") {
	   window.location.assign("settings.html");
	   alert("Login successfully");
	}
	else {
		alert("Invalid username or password");
	   return false;
	}
 }