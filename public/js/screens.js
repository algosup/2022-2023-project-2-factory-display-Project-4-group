import { initializeFirebase } from "./firebase.js";
import { getFirestore, getDocs, collection, setDoc, doc, updateDoc, addDoc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

var app = initializeFirebase();
var db = getFirestore(app);


let screens = document.getElementById("screens")
let screensNbr = 10;
let screensArray = new Array;
let templatesArray = new Array;

function createScreensPage() {
    getDocs(collection(db, "Screens")).then((querySnapshot) => {
        screensNbr = querySnapshot.size - 1;
        querySnapshot.forEach((doc) => {
            if (doc.data().id != "-1") {
                screensArray.push({ 'name': doc.data().name, 'id': doc.data().id, 'restricted': doc.data().restricted, 'templateID': doc.data().templateID, 'code': doc.data().code });
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
            div.style.gridTemplateColumns = '1fr'
            div.innerHTML = screensArray[i].name;
            // let p = document.createElement('p')
            // p.innerHTML = 'le code est: ' + screensArray[i].code
            // p.style.gridRow = '2'
            // p.style.gridColumn = '1'
            // p.style.fontSize = '2rem'
            // div.appendChild(p)
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
        let num = screensNbr;
        screens.querySelectorAll('.screen').forEach(function(element) {
            element.style.borderRadius = '5px'
            let selector = document.createElement('select')
            selector.style.gridRow = '3'
            selector.style.gridColumn = '1'
            selector.style.width = '80%'
            selector.style.position = 'relative'
            selector.style.backgroundColor = '#fff'
            selector.style.border = '2px solid #23242a'
            selector.style.borderBottom = 'none'
            selector.style.outline = 'none'
            selector.style.borderRadius = '5px 0 0 0'
            selector.style.cursor = "pointer"
            selector.id = ("0" + String(num))
            let btn = document.createElement('button')
            btn.innerHTML = "✓"
            btn.style.gridRow = '3'
            btn.style.gridColumn = '1'
            btn.style.width = '20%'
            btn.style.position = 'relative'
            btn.style.left = '80%'
            btn.style.backgroundColor = '#fff'
            btn.style.border = '2px solid #23242a'
            btn.style.borderLeft = 'none'
            btn.style.borderBottom = 'none'
            btn.style.outline = 'none'
            btn.style.borderRadius = '0 5px 0 0'
            btn.style.cursor = "pointer"
            btn.id = String(num)
            num += 1
            let nullOption = document.createElement('option')
            nullOption.value = "Vide"
            nullOption.innerHTML = "Vide"
            selector.appendChild(nullOption)
            getDocs(collection(db, "Templates")).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    templatesArray.push({ 'name': doc.data().name, 'id': doc.data().id });
                    if (element.classList.contains('restricted')) {
                        let temp = false
                        doc.data().template.forEach(function(a) {
                            if (a.restricted == true) {
                                temp = true
                            }
                        });
                        if (temp == false) {
                            let option = document.createElement('option')
                            option.value = doc.data().name
                            option.innerHTML = doc.data().name
                            selector.appendChild(option)
                        }
                    } else {
                        let option = document.createElement('option')
                        option.value = doc.data().name
                        option.innerHTML = doc.data().name
                        selector.appendChild(option)
                    }
                    selector.querySelectorAll('option').forEach(function(a) {
                        if (doc.data().id == screensArray[element.id].templateID) {
                            a.selected = true
                            a.defaultSelected = true
                        }
                    });
                });
            })
            btn.addEventListener('click', function() {
                let tId = this.id
                let screenActual = document.getElementById(tId - 9)
                templatesArray.forEach(function(a) {
                    if (a.name == document.getElementById("0" + tId).value) {
                        changeTemplateInDatabase(a.id, screenActual.id)
                    } else if (document.getElementById("0" + tId).value == "Vide") {
						changeTemplateInDatabase("", screenActual.id)
					}
                })
                console.log(document.getElementById("0" + this.id).id)
            });
            element.appendChild(selector)
            element.appendChild(btn)
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
        // list.id = element.id;
        document.getElementById('active').innerHTML += list.outerHTML
    } else {
        document.getElementById('active').querySelectorAll('li').forEach(function(a) {
            if (a.innerHTML == element.value) {
                a.remove();
            }
        });
    }
}

createScreensPage();

document.getElementById('non-restricted').addEventListener('change', function() {
    getCheckedElements(this);
    if (this.checked) {
        document.getElementById('restricted-label').style.display = "none";
        screens.querySelectorAll('.screen').forEach(function(a) {
            if (a.classList.contains('restricted')) {
                a.style.display = "none";
            }
        });
        document.getElementById('border').style.display = "block";
    } else {
        document.getElementById('restricted-label').style.display = "block";
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
        document.getElementById('border').style.display = "none";
    }
});
document.getElementById('restricted').addEventListener('change', function() {
    getCheckedElements(document.getElementById('restricted'));
    if (this.checked) {
        document.getElementById('non-restricted-label').style.display = "none";
        screens.querySelectorAll('.screen').forEach(function(a) {
            if (a.classList.contains('nonrestricted')) {
                a.style.display = "none";
            }
        });
        document.getElementById('border').style.display = "block";
    } else {
        document.getElementById('non-restricted-label').style.display = "block";
        screens.querySelectorAll('.screen').forEach(function(a) {
            if (a.classList.contains('nonrestricted')) {
                a.style.display = "grid";
            }
        });
        document.getElementById('border').style.display = "none";
    }
});
document.getElementById('doesnt-have-a-template').addEventListener('change', function() {
    getCheckedElements(this);
    if (this.checked) {
        document.getElementById('have-a-template-label').style.display = "none";
        screens.querySelectorAll('.screen').forEach(function(a) {
            if (a.classList.contains('template')) {
                a.style.display = "none";
            }
        });
        document.getElementById('border').style.display = "block";
    } else {
        screens.querySelectorAll('.screen').forEach(function(a) {
            document.getElementById('have-a-template-label').style.display = "block";
            if (a.classList.contains('template')) {
                a.style.display = "grid";
            }
        });
        document.getElementById('border').style.display = "none";
    }
});
document.getElementById('have-a-template').addEventListener('change', function() {
    getCheckedElements(this);
    if (this.checked) {
        document.getElementById('doesnt-have-a-template-label').style.display = "none";
        screens.querySelectorAll('.screen').forEach(function(a) {
            if (a.classList.contains('notemplate')) {
                a.style.display = "none";
            }
        });
        document.getElementById('border').style.display = "block";
    } else {
        document.getElementById('doesnt-have-a-template-label').style.display = "block";
        screens.querySelectorAll('.screen').forEach(function(a) {
            if (a.classList.contains('notemplate')) {
                a.style.display = "grid";
            }
        });
        document.getElementById('border').style.display = "none";
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

async function changeTemplateInDatabase(templateId, idT) {
    await updateDoc(doc(db, "Screens", idT), {
        templateID: templateId,
		reload: true
    });
}