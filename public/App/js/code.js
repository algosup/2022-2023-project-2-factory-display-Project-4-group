// import { initializeFirebase } from "./firebase.js";
// import { getFirestore, getDocs, collection, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

// var app = initializeFirebase();
// var db = getFirestore(app);

var randomCode = Math.floor(Math.random() * 99999);
var element = document.querySelector("#random-code");
element.innerHTML = randomCode;