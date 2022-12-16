import { initializeFirebase } from "./firebase.js";
import { getFirestore, getDocs, collection, setDoc, doc, updateDoc, addDoc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

var app = initializeFirebase();
var db = getFirestore(app);


var idA;

function login() {
	var email;
	var password;
	var id;
	var connected;
	var gq;
	getDocs(collection(db, "users")).then((querySnapshot) => {
		querySnapshot.forEach((docs) => {
			email = docs.data().email;
			password = docs.data().password;
			id = docs.data().id;
			connected = docs.data().connected;
			if (email == document.getElementById("e-mail").value && password == document.getElementById("password").value) { 
				changeStatus(id, true);
			}
		});
		document.getElementById("error").style = "color: red; display: block; text-align: center;";
		document.getElementById("password").value = "";
		}).then(() => {
		});
	}

function changeStatus(id, connected){
	updateDoc(doc(db, "users", id), {
		connected: connected,
	}).then(() => {
	if (connected == true) {
		location.href = "screens.html?id=" + id;
	} else {
		location.href = "index.html";
	}
});
}


let button = document.getElementById("submit");

button.addEventListener("click", login);
document.body.addEventListener("keydown", function(code) {
	if (code.key == "Enter") {
		login();
	}
});