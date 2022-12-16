import { initializeFirebase } from "../../js/firebase.js";
import { getFirestore, getDocs, collection, setDoc, doc, updateDoc, addDoc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

var app = initializeFirebase();
var db = getFirestore(app);



let ScreenId = location.href.split('=')[1]

function getTemplatesFromDatabase() {
    let templateId;
    let templateArray = [];
    let restrictedScreen;
    getDocs(collection(db, "Screens")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.data().id == ScreenId) {
                templateId = doc.data().templateID
                restrictedScreen = doc.data().restricted
            }
        });
    }).then(
        getDocs(collection(db, "Templates")).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().id == templateId) {
                    templateArray = doc.data().template;
                }
            })
            console.log(templateArray);
            templateArray.forEach((element) => {
                console.log(element);
                displayInfos(element.start, element.rows, element.columns, element.content)
            })
        })
    );
}

function displayInfos(start, rows, columns, content) {
    let doc = document.querySelector('.down')
    let info = document.createElement('div')
    info.className = "news"
    info.style.gridColumn = start[1] + '/' + String(Number(start[1]) + Number(columns))
    info.style.gridRow = String(Number(start[0]) + 1) + '/' + String(Number(start[0]) + Number(rows) + 1)
    info.innerHTML = content
    doc.appendChild(info)
}

var time = setInterval(getReload, 5000)
function getReload(){
	getDocs(collection(db, "Screens")).then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
			if (doc.data().id == ScreenId) {
				if (doc.data().reload){
					updateReload(false, ScreenId);
				}
			}
		});
	});
}

async function updateReload(reload, idN){
	await updateDoc(doc(db, "Screens", idN), {
		reload: reload,
	}).then(() => {
		location.reload();
	});
}












getTemplatesFromDatabase();