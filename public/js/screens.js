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
            div.id = i
            div.style.display = 'grid'
            div.style.gridTemplateRows = '1fr 2fr 1fr'
            div.style.justifyContent = 'center'
            div.innerHTML = screensArray[(i)].name;
            if (screensArray[i].restricted == true) {
                div.style.border = "3px solid #a00000";
                div.classList.add("restricted");
            } else {
                div.classList.add("nonrestricted");
                div.style.border = "3px solid #00c000";
            }
            if (screensArray[i].templateID != "") {
                div.classList.add("template");
            } else {
                div.classList.add("notemplate");
            }
            screens.appendChild(div);
        }
    }).then(() => {
        screens.querySelectorAll('.screen').forEach(function(element) {
            element.style.borderRadius = '5px'
            let selector = document.createElement('select')
            selector.style.gridRow = '3'
            selector.style.width = '100%'
            selector.style.backgroundColor = '#fff'
            selector.style.border = '2px solid #23242a'
            selector.style.borderBottom = 'none'
            selector.style.outline = 'none'
            selector.style.borderRadius = '5px 5px 0 0'
            getDocs(collection(db, "Templates")).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.data().id != "-1") {
                        let option = document.createElement('option')
                        option.value = doc.data().name
                        option.innerHTML = doc.data().name
                        selector.appendChild(option)
                    }
                });
            })
            element.appendChild(selector)
        })
    });
}

/**
 * 
 * @param {HTMLInputElement} element 
 */
function getCheckedElements(element) {
    if (element.checked) {
        let list = document.createElement('li')
        list.innerHTML = element.value;
        document.getElementById('active').innerHTML += list.outerHTML
    } else {
        document.getElementById('active').querySelectorAll('li').forEach(function(a) {
            if (a.innerHTML == element.value) {
                a.remove();
            }
        });
    }
}
screens.querySelectorAll('.screen').forEach(function(element) {
    element.setAttribute('onclick', isSelected(element.id))
})

function isSelected(id) {
    let element = document.getElementById(id)
    console.log(element)
    element.style.backgroundColor = '#fff'
}

createScreensPage();

document.getElementById('non-restricted').addEventListener('change', function() {
    getCheckedElements(this);
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
                    a.style.display = "grid";
                } else if (document.getElementById('have-a-template').checked == true) {
                    if (a.classList.contains('notemplate')) {
                        a.style.display = "grid";
                    }
                } else if (document.getElementById('doesnt-have-a-template').checked == true) {
                    if (a.classList.contains('template')) {
                        a.style.display = "grid";
                    }
                }
            }
        });
    }
});
document.getElementById('restricted').addEventListener('change', function() {
    getCheckedElements(document.getElementById('restricted'));
    if (this.checked) {
        screens.querySelectorAll('.screen').forEach(function(a) {
            if (a.classList.contains('nonrestricted')) {
                a.style.display = "none";
            }
        });
    } else {
        screens.querySelectorAll('.screen').forEach(function(a) {
            if (a.classList.contains('nonrestricted')) {
                a.style.display = "grid";
            }
        });
    }
});
document.getElementById('doesnt-have-a-template').addEventListener('change', function() {
    getCheckedElements(this);
    if (this.checked) {
		document.getElementById('have-a-template').style.display = "none";
        screens.querySelectorAll('.screen').forEach(function(a) {
            if (a.classList.contains('template')) {
                a.style.display = "none";
            }
        });
    } else {
        screens.querySelectorAll('.screen').forEach(function(a) {
			document.getElementById('have-a-template').style.display = "grid";
            if (a.classList.contains('template')) {
                a.style.display = "grid";
            }
        });
    }
});
document.getElementById('have-a-template').addEventListener('change', function() {
    getCheckedElements(this);
    if (this.checked) {
        screens.querySelectorAll('.screen').forEach(function(a) {
            if (a.classList.contains('notemplate')) {
                a.style.display = "none";
            }
        });
    } else {
        screens.querySelectorAll('.screen').forEach(function(a) {
            if (a.classList.contains('notemplate')) {
                a.style.display = "grid";
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
    getCheckedElements(document.getElementById('restricted'));
    getCheckedElements(document.getElementById('non-restricted'));
    getCheckedElements(document.getElementById('have-a-template'));
    getCheckedElements(document.getElementById('doesnt-have-a-template'));
    document.getElementById('active').innerHTML = "";
});