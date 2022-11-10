// add Obfuscated code here

function validate() {
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
   if (username == "admin" && password == "admin") {
      window.location.href ="settings.html";
      alert("Login successfully");
   }
   else {
       alert("Invalid username or password");
      return false;
   }
}
