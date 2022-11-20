function validate() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == "admin" && password == "admin") {
		if (navigator.userAgent.indexOf('Mac OS X') != -1) {
			login.href='settings.html';
			alert("Login successfully");
		} else {
			window.location.assign("settings.html");
	   	alert("Login successfully");
	}} else {
	alert("Invalid username or password");
	   return false;
	}
 }