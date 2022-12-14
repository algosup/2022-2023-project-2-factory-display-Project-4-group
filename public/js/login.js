import { initializeFirebase } from "./firebase.js";
import { getFirestore, getDocs, collection, setDoc, doc, updateDoc, addDoc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

var app = initializeFirebase();
var db = getFirestore(app);

function login() {
	var email;
	var password;
	var id
	var connected;
	getDocs(collection(db, "users")).then((querySnapshot) => {
		querySnapshot.forEach((docs) => {
			email = docs.data().email;
			password = docs.data().password;
			id = docs.data().id;
			connected = docs.data().connected;
			if (email == document.getElementById("e-mail").value && password == document.getElementById("password").value) { 
				self.location = "screens.html?id=" + id;
				console.log("Login successful");
				updateDoc(doc(db, "users", id), {
                    connected: true,
                });
			}
		});
		document.getElementById("error").style = "color: red; display: block; text-align: center;";
		document.getElementById("password").value = "";
		}).then(() => {
		});
	}




let button = document.getElementById("submit");

button.addEventListener("click", login);