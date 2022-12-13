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
            if (doc.data().id != "-1") {
                screensArray.push({ 'name': doc.data().name, 'id': doc.data().id, 'restricted': doc.data().restricted, 'templateID': doc.data().templateID });
            }
        });
    }).then(() => {
        console.log(screensNbr);
        for (let i = 0; i < screensNbr; i++) {
            var div = document.createElement("div");
            div.classList.add("screen");
            div.innerHTML = screensArray[(i)].name;
            if (screensArray[i].restricted == true) {
                div.style.border = "3px solid #a00000";
                div.classList.add("restricted");
            } else {
                div.classList.add("nonrestricted");
                div.style.border = "3px solid #00c000";
            }
            if (screensArray[i].templateID != "") {
                div.classList.add("notemplate");
            } else {
                div.classList.add("template");
            }
            screens.appendChild(div);
        }
    });
}

createScreensPage();

document.getElementById('restricted').addEventListener('change', function() {
    if (this.checked) {
        screens.querySelectorAll('.screen').forEach(function(a) {
            if (a.classList.contains('restricted')) {
                a.style.display = "none";
            }
        });
    } else {
        screens.querySelectorAll('.screen').forEach(function(a) {
            if (a.classList.contains('restricted')) {
                if (document.getElementById('non-restricted').checked == false && document.getElementById('have-a-template').checked == false && document.getElementById('doesnt-have-a-template').checked == false) {
                    a.style.display = "block";
                } else if (document.getElementById('have-a-template').checked == true) {
                    if (a.classList.contains('notemplate')) {
                        a.style.display = "block";
                    }
                } else if (document.getElementById('doesnt-have-a-template').checked == true) {
                    if (a.classList.contains('template')) {
                        a.style.display = "block";
                    }
                }
            }
        });
    }
});
document.getElementById('non-restricted').addEventListener('change', function() {
    if (this.checked) {
        screens.querySelectorAll('.screen').forEach(function(a) {
            if (a.classList.contains('nonrestricted')) {
                a.style.display = "none";
            }
        });
    } else {
        screens.querySelectorAll('.screen').forEach(function(a) {
            if (a.classList.contains('nonrestricted')) {
                a.style.display = "block";
            }
        });
    }
});
document.getElementById('have-a-template').addEventListener('change', function() {
    if (this.checked) {
        screens.querySelectorAll('.screen').forEach(function(a) {
            if (a.classList.contains('template')) {
                a.style.display = "none";
            }
        });
    } else {
        screens.querySelectorAll('.screen').forEach(function(a) {
            if (a.classList.contains('template')) {
                a.style.display = "block";
            }
        });
    }
});
document.getElementById('doesnt-have-a-template').addEventListener('change', function() {
    if (this.checked) {
        screens.querySelectorAll('.screen').forEach(function(a) {
            if (a.classList.contains('notemplate')) {
                a.style.display = "none";
            }
        });
    } else {
        screens.querySelectorAll('.screen').forEach(function(a) {
            if (a.classList.contains('notemplate')) {
                a.style.display = "block";
            }
        });
    }
});
document.getElementById('clearAll').addEventListener('click', function() {
    document.querySelectorAll('.check').forEach(function(a) {
        a.checked = false;
        document.getElementById('restricted').dispatchEvent(new Event('change'));
        document.getElementById('non-restricted').dispatchEvent(new Event('change'));
        document.getElementById('have-a-template').dispatchEvent(new Event('change'));
        document.getElementById('doesnt-have-a-template').dispatchEvent(new Event('change'));
    });
});