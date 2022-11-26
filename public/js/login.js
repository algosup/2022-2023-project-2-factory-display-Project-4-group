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
			if (email == document.getElementById("e-mail").value ) { 
				// && compare(document.getElementById("password").value, password)
				self.location = "settings.html";
				console.log("Login successful");
			}
        });
	}).catch((error) => {
		console.log("Error getting documents: ", error);
	});
}


let button = document.getElementById("submit");

button.addEventListener("click", login);