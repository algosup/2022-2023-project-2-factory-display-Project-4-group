import { initializeFirebase } from "./firebase.js";
import { getFirestore, getDocs, collection, setDoc, doc, updateDoc, addDoc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

var app = initializeFirebase();
var db = getFirestore(app);

function logout() {
	var id = location.href.split("=")[1];
	var connected
	updateDoc(doc(db, "users", id), {
		connected: false,
	});
	location.href = "index.html";
}

function redirect() {
	let id = location.href.split("=")[1];
	let div1 = document.getElementById("0");
	let div2 = document.getElementById("1");
	let div3 = document.getElementById("2");
	let div4 = document.getElementById("3");
	let btn1 = document.createElement("button");
	let btn2 = document.createElement("button");
	let btn3 = document.createElement("button");
	let btn4 = document.createElement("button");
	btn1.className = "nv-btn";
	btn2.className = "nv-btn";
	btn3.className = "nv-btn";
	btn4.className = "nv-btn";
	btn1.innerHTML = "Vos écrans";
	btn2.innerHTML = "Vos modèles";
	btn3.innerHTML = "Paramètres";
	btn4.innerHTML = "Déconnexion";
	btn1.addEventListener("click", function() {
		location.href = "screens.html?id=" + id;
	})
	btn2.addEventListener("click", function() {
		location.href = "templates.html?id=" + id;
	})
	btn3.addEventListener("click", function() {
		location.href = "settings.html?id=" + id;
	})
	btn4.addEventListener("click", logout);
	div1.appendChild(btn1);
	div2.appendChild(btn2);
	div3.appendChild(btn3);
	div4.appendChild(btn4);
}

redirect();