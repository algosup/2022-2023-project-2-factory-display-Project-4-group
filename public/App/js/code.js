import { initializeFirebase } from "../../js/firebase.js";
import { getFirestore, getDocs, collection, addDoc, doc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

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
        if (checkExistingCodes(code)) {
            generateRandomCode();
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
            if (doc.data().code == code) {
                return true
            }
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
    document.getElementById('code2').style.display = 'grid'
})

document.getElementById('btnRS').addEventListener('click', function() {
    if (this.innerHTML == 'Cet écran est public') {
        privat = true
        this.innerHTML = 'Cet écran est privé'
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
        id = String(querySnapshot.size - 1)
    }).then(() => {
        let nam = document.getElementById('btnNM').value
        console.log(id, privat, nam, document.getElementById('random-code').innerHTML)
        setScreenInfos(id, privat, String(nam), String(document.getElementById('random-code').innerHTML))
    }).then(() => {
	})
});

/**
 * 
 * @param {String} idA 
 * @param {Boolean} restricted 
 * @param {String} nameA 
 * @param {String} code 
 */
function setScreenInfos(idA, restricted, nameA, code) {
    addDoc(collection(db, "Screens"), {
        id: idA,
        name: nameA,
        code: code,
        reload: false,
        restricted: restricted,
        templateID: "",
    }).then(() => {
		location.href = "index.html?id=" + idA
	})
}


document.getElementById('btnRO').addEventListener('click', function() {
    document.getElementById('choices-title').style.display = 'block'
    document.getElementById('choices').style.display = 'grid'
        // document.getElementById('codeTitle').style.display = 'none'
        // document.getElementById('btnRO').style.display = 'none'
        // document.getElementById('btnOK').style.display = 'none'
    document.getElementById('code2').style.display = 'none'
});

document.getElementById('btnOK').addEventListener('click', async function() {
    if (document.getElementById("nb1").value && document.getElementById("nb2").value && document.getElementById("nb3").value && document.getElementById("nb4").value && document.getElementById("nb5").value) {
        let nb1 = String(document.getElementById('nb1').value)
        let nb2 = String(document.getElementById('nb2').value)
        let nb3 = String(document.getElementById('nb3').value)
        let nb4 = String(document.getElementById('nb4').value)
        let nb5 = String(document.getElementById('nb5').value)
        let code = nb1 + nb2 + nb3 + nb4 + nb5
        console.log(code)
        let res = await getScreensData(code)
        if (res.exist) {
            location.href = "index.html?id=" + res.id
        } else {
            alert("Aucun écran ne possède ce code")
        }
    }
});

/**
 * 
 * @param {String} dataCode
 * @returns {Boolean, String}
 */
async function getScreensData(dataCode) {
    let exist = false
    let id;
    await getDocs(collection(db, "Screens")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.data().code === dataCode) {
                id = doc.data().id
                exist = true
            }
        });
    });
    return { exist, id }
}