import { initializeFirebase } from "../../js/firebase.js";
import { getFirestore, getDocs, collection, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

var app = initializeFirebase();
var db = getFirestore(app);

let privat = false;

function generateRandomCode() {
    var randomCode = Math.floor(Math.random() * 99999);
    var element = document.querySelector("#random-code");
    if (String(randomCode).length < 5) {
        let code = randomCode
        for (let i = 0; String(code).length < 5; i++) {
            code = "0" + code
        }
        element.innerHTML = code
    } else {
        element.innerHTML = randomCode;
    }
}
/**
 * 
 * @param {String} code 
 * @returns {Boolean}
 */
function checkExistingCodes(code) {
    getDocs(collection(db, "Screens")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data().code);
        });
    });
    return false
}

document.getElementById('one').addEventListener('click', function() {
    document.getElementById('choices-title').style.display = 'none'
    document.getElementById('choices').style.display = 'none'
    document.getElementById('code-title').style.display = 'block'
    document.getElementById('random-code').style.display = 'block'
    document.getElementById('btnCY').style.display = 'grid'
    document.getElementById('btnCO').style.display = 'grid'
    generateRandomCode();
})

document.getElementById('btnRS').addEventListener('click', function() {
    if (this.innerHTML == 'Cet écran est public') {
        privat = true
        this.innerHTML = 'cet écran est privé'
    } else {
        this.innerHTML = 'Cet écran est public'
        privat = false
    }
})

document.getElementById('btnRT').addEventListener('click', function() {
    document.getElementById('choices-title').style.display = 'block'
    document.getElementById('choices').style.display = 'grid'
    document.getElementById('code-title').style.display = 'none'
    document.getElementById('random-code').style.display = 'none'
    document.getElementById('btnCO').style.display = 'none'
});

document.getElementById('btnRG').addEventListener('click', function() {
    generateRandomCode();
});

document.getElementById('btnCN').addEventListener('click', function() {
    let id;
    getDocs(collection(db, "Screens")).then((querySnapshot) => {
        id = querySnapshot.size
    }).then(() => {
        let nam = document.getElementById('btnNM').value
        console.log(id, privat, nam, document.getElementById('random-code').innerHTML)
        setScreenInfos(id, privat, nam, document.getElementById('random-code').innerHTML)
    });
});

async function setScreenInfos(idA, restricted, nameA, code) {
    await setDoc(doc(db, "Templates", idA), {
        id: idA,
        name: nameA,
        code: code,
        reload: false,
        restricted: restricted,
        templateID: ""
    });
}