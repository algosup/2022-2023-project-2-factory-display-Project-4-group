import { initializeFirebase } from "./firebase.js";
import { getFirestore, getDocs, collection, setDoc, doc, updateDoc, addDoc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

var app = initializeFirebase();
var db = getFirestore(app);


let screens = document.getElementById("screens")
let screensNbr = 10;
let screensArray = new Array;

function createScreensPage() {
    getDocs(collection(db, "Screens")).then((querySnapshot) => {
        screensNbr = querySnapshot.size - 1;
        querySnapshot.forEach((doc) => {
            screensArray.push({ 'name': doc.data().name, 'id': doc.data().id, 'restricted': doc.data().restricted, 'templateID': doc.data().templateID });
        });
    }).then(() => {
        console.log(screensNbr);
        for (let i = 0; i < screensNbr; i++) {
            var div = document.createElement("div");
            div.className = "screen";
            div.innerHTML = screensArray[i].name;
            if (screensArray[i].restricted == true) {
                div.style.border = "3px solid #a00000";
            } else {
                div.style.border = "3px solid #00c000";
            }
            screens.appendChild(div);
        }
    });
}

createScreensPage();