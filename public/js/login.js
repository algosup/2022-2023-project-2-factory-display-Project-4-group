import { initializeFirebase } from "./firebase.js";
import { getFirestore, getDocs, collection, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

var app = initializeFirebase();
var db = getFirestore(app);

function login() {
    var email;
    var password;
	console.log("login");
    getDocs(collection(db, "users")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
			email = doc.data().email;
			password = doc.data().password;
			if (email == document.getElementById("e-mail").value && password == document.getElementById("password").value) { 
				self.location = "settings.html";
				console.log("Login successful");
			}
        });
	});
	document.getElementById("password").value = "";
	return alert("Login failed");
}


let button = document.getElementById("submit");

button.addEventListener("click", login);