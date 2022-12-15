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

document.getElementById('two').addEventListener('click', function() {
	document.getElementById('choices-title').style.display = 'none'
	document.getElementById('choices').style.display = 'none'
	document.getElementById('codeTitle').style.display = 'block'
	document.getElementById('input-numbers').style.display = 'block'
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
	document.getElementById('btnCY').style.display = 'none'
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

document.getElementById('btnOK').addEventListener('click', function() {
	if (document.getElementById("nb1").value && document.getElementById("nb2").value && document.getElementById("nb3").value && document.getElementById("nb4").value && document.getElementById("nb5").value) {
		nb1 = string(document.getElementById('nb1').value)
		nb2 = string(document.getElementById('nb2').value)
		nb3 = string(document.getElementById('nb3').value)
		nb4 = string(document.getElementById('nb4').value)
		nb5 = string(document.getElementById('nb5').value)
		code = nb1 + nb2 + nb3 + nb4 + nb5
		alert('Le code est ' + code)
	} else {
		alert('Veuillez entrer un code valide')
	}
});
