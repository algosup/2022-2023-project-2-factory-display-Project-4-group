import { initializeFirebase } from "./firebase.js";
import { getFirestore, getDocs, collection, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";var container = document.getElementById('display');

var app = initializeFirebase();
var db = getFirestore(app);

function getTemplates() {
	let name;
	let templates = new Array;
	getDocs(collection(db, "Screens")/*, where("id", "==", "-1")*/).then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
			if (doc.data().id == "-1") {
				name = doc.data().name;
			}
			else {
			}
		});
	}).then(() => {
		getDocs(collection(db, "Templates")/*, where("id", "==", "-1")*/).then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				templates.push(doc.data().test[0].start, doc.data().test[0].rows, doc.data().test[0].columns);
			});
		});
	}).then(() => {
		console.log(name, templates);
		let selectTemplate = document.getElementById('templates')
	});
}

getTemplates();