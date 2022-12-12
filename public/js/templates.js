import { initializeFirebase } from "./firebase.js";
import { getFirestore, getDocs, collection, setDoc, doc, updateDoc, addDoc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

var app = initializeFirebase();
var db = getFirestore(app);


var container = document.getElementById('display');
var container2 = document.getElementById('display2');
let rot = 0;
let sizes = document.getElementById('sizes');
let type = document.getElementById('selectType');
let rotate = document.getElementById('rotate');
let colorsIndex = 0;
let colors = ['#03045E', '#0077B6', '#00B4D8', '#90E0EF', '#03254C', '#1167B1', '#187BCD', '#2A9DF4', '#D0EFFF', '#0000FF', '#003CFF', '#07006B', '#3C00FF', '#043E7D'];

let row = 1;
let column = 0;
let rowsArray;
let columnsArray;
let templateAdd = new Array();

let templateSelect = document.getElementById('templates')

function getTemplatesInSelect() {
	getDocs(collection(db, "Templates")).then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
			let option = document.createElement('option');
			option.value = doc.data().name
			option.innerHTML = doc.data().name
			templateSelect.appendChild(option)
		});
	})
}
getTemplatesInSelect()

function getTemplates(templateid) {
	let name;
	let templateName = document.getElementById('templateName');
	getDocs(collection(db, "Screens") /*, where("id", "==", "-1")*/ ).then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
			if (doc.data().id == "-1") {
				name = doc.data().name;
				templateid = doc.data().templateID;
			} else {}
		});
	}).then(() => {
		getDocs(collection(db, "Templates")).then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				if (doc.data().id == templateid) {
					doc.data().test.forEach((item) => {
						if (templateSelect.selectedIndex != 0) {
							displayTemplate(Number(item.rows), Number(item.columns), item.start)
							submitTemplate()
							templateName.value = doc.data().name
							templateName.setAttribute('readonly', true)
						} else {
							clearGrids()
							displayTemplate(1, 1)
							templateName.value = ''
							templateName.removeAttribute('readonly')
						}
					})
				}
			});
		})
	});
}


for (let index = 1; index <= 48; index++) {
	var grid = document.createElement('div');
	grid.classList.add('grid');
	if (index == 1) {
		grid.className = 'square2';
	} else {
		grid.className = `square1`;
	}
	grid.id = index;
	column += 1;
	if (index % 8 == 0) {
		grid.innerText = row.toString() + column.toString() + '-';
		row += 1;
		column = 0;
	} else {
		grid.innerText = row.toString() + column.toString() + '-';
	}
	container.appendChild(grid);
}
for (let index = 49; index <= 96; index++) {
	var gridA = document.createElement('div');
	gridA.className = `squareT`;
	gridA.id = index;
	container2.appendChild(gridA);
}



// Display the selected template size
function displayTemplate(rows, columns, start) {
	if (start == undefined) {
		rows = Number(sizes.options[sizes.selectedIndex].value[0]);
		columns = Number(sizes.options[sizes.selectedIndex].value[2]);
		start = '11'
	}
	displaySelected(rows, columns, start);
	let coun = 0;
	for (let index = 1; index <= 48; index++) {
		var grid = document.getElementById(index);
		if (grid.innerHTML[2] == '_' && grid.className == 'square2') {
			coun += 1;
		}
	}
	if (coun != 0) {
		let submit = document.getElementById('displayed');
		submit.style.backgroundColor = 'gray';
		submit.style.cursor = 'not-allowed';
		submit.disabled = true;
	} else {
		let submit = document.getElementById('displayed');
		submit.style.backgroundColor = '#ff6600';
		submit.style.cursor = 'pointer';
		submit.disabled = false;
	}
	if (sizes.options[sizes.selectedIndex].value[0] == sizes.options[sizes.selectedIndex].value[2] || sizes.options[sizes.selectedIndex].value[2] == 8) {
		rotate.style.backgroundColor = 'gray';
		rotate.style.cursor = 'not-allowed';
		rotate.disabled = true;
	} else {
		rotate.style.backgroundColor = '#ff6600';
		rotate.style.cursor = 'pointer';
		rotate.disabled = false;
	}
}

function rotateTemplate() {
	let rows = sizes.options[sizes.selectedIndex].value[2];
	let columns = sizes.options[sizes.selectedIndex].value[0];
	if (rot == 0 && sizes.options[sizes.selectedIndex].value[2] != 8) {
		displaySelected(rows, columns);
		rot = 1;
	} else if (rot == 1 && sizes.options[sizes.selectedIndex].value[2] != 8) {
		displaySelected(columns, rows);
		rot = 0;
	}
}

function displaySelected(rows, columns, start) {
	if (start == undefined) {
		start = '11'
	}
	for (let index = 1; index <= 48; index++) {
		var grid = document.getElementById(index);
		if (grid.className == 'square2') {
			if (grid.innerHTML[2] == '_') {
				grid.className = 'squareT';
			} else {
				grid.className = `square1`;
			}
		}
	}
	var count = 1;
	for (let rowsIndex = 1; rowsIndex <= Number(start[0]) + Number(rows) - 1; rowsIndex++) {
		for (let columnsIndex = 1; columnsIndex <= Number(start[1]) + Number(columns) - 1; columnsIndex++) {
			if (rowsIndex >= Number(start[0]) && columnsIndex >= Number(start[1])) {
				var grid = document.getElementById(count);
				grid.className = 'square2';
			}
			count += 1;
		}
		count -= (Number(start[1]) + Number(columns) - 1);
		count += 8
	}
}


function submitTemplate() {
	let color = colors[colorsIndex];
	let appear = 0
	let first;
	// for (let i = 1; i <= 48; i++) {
	//     var grid = document.getElementById(i);
	//     if (grid.className == 'square2' && appear == 0) {
	//         appear = 1;
	//         first = grid.innerHTML.substring(0, 2)
	//         console.log(first)
	//             // templateAdd.push( new Map(grid.innerHTML.substring(0, 2), rows, columns))
	//     }
	// }
	// let columnLenght = 0;
	// for (let i = (8 * (Number(first[0]) - 1) + 1); i <= (8 * (Number(first[0]) - 1) + 1) + 8; i++) {
	//     var grid = document.getElementById(i);
	//     if (grid.className == 'square2') {
	//         columnLenght += 1;
	//     }
	// }
	// let rowLenght = 0;
	// for (let z = Number(first[1]); z <= 48; z += 8) {
	//     var grid = document.getElementById(z);
	//     console.log('HERE')
	//     if (grid.className == 'square2') {
	//         rowLenght += 1;
	//     }
	// }
	// console.log(rowLenght, columnLenght)
	for (let index = 1; index <= 48; index++) {
		var grid = document.getElementById(index);
		if (grid.className == 'square2') {
			let square = document.getElementById(index + 48);
			square.className = 'squareD';
			square.style.backgroundColor = color;
			grid.innerHTML = grid.innerHTML[0] + grid.innerHTML[1] + '_';
			grid.className = 'squareT';
			if (appear == 0) {
				first = grid.innerHTML.substring(0, 2)
				if (rot == 0){
					templateAdd.push({ 'start': first, 'rows': document.getElementById('sizes').value[0], 'columns': document.getElementById('sizes').value[2] })
				} else {
					templateAdd.push({ 'start': first, 'rows': document.getElementById('sizes').value[2], 'columns': document.getElementById('sizes').value[0] })
				}
				appear = 1
			}
		}
	}
	colorsIndex += 1;
	console.log(templateAdd)
}

function clearGrids() {
	for (let index = 49; index <= 96; index++) {
		var grid = document.getElementById(index);
		grid.className = 'squareT';
		grid.style.backgroundColor = '#1f1f1f';
	}
	for (let index = 1; index <= 48; index++) {
		var grid = document.getElementById(index);
		if (grid.className == 'square2' || grid.className == 'squareT') {
			grid.className = 'square1';
			grid.innerHTML = grid.innerHTML[0] + grid.innerHTML[1] + '-';
		}
	}
}


function submitTemplateToDatabase() {
	let nameOfTemplate;
	let idOfTemplate;
	let screensOfTemplate;
	let dbLength;
	getDocs(collection(db, "Templates")).then((querySnapshot) => {
		dbLength = querySnapshot.size;
		querySnapshot.forEach((doc) => {
			if (doc.data().name == document.getElementById('templateName').value) {
				nameOfTemplate = doc.data().name;
				idOfTemplate = doc.data().id;
				screensOfTemplate = doc.data().screens;
			}
		});
	}).then(() => {
		if (nameOfTemplate == undefined) {
			addDoc(collection(db, "Templates"), {
				name: document.getElementById('templateName').value,
				template: templateAdd,
				id: dbLength,
				content: document.getElementById('textInput').innerHTML
			});
		} else {
			let choice = confirm('Template name already exists, do you want to overwrite it?');
			if (choice === true) {
				updateDoc(doc(db, "Templates", idOfTemplate), {
					template: templateAdd,
				});
			}
		}
	});
}

let txt = document.getElementById('textInput');
document.addEventListener('keydown', function(e) {
	let code = e.code;
	if (code == 'ArrowRight' && document.getElementById(8).className != 'square2' && document.getElementById(16).className != 'square2' && document.getElementById(24).className != 'square2' && document.getElementById(32).className != 'square2' && document.getElementById(40).className != 'square2' && document.getElementById(48).className != 'square2' && txt.matches(':focus') == false) {
		for (let index = 47; index >= 1; index--) {
			var grid = document.getElementById(index);
			if (grid.className == 'square2') {
				let square = document.getElementById(index + 1);
				square.className = 'square2';
				if (grid.innerHTML[2] == '_') {
					grid.className = 'squareT';
				} else {
					grid.className = 'square1';
				}
			}
		}
		let coun = 0;
		for (let index = 1; index <= 48; index++) {
			var grid = document.getElementById(index);
			if (grid.innerHTML[2] == '_' && grid.className == 'square2') {
				coun += 1;
			}
		}
		if (coun != 0) {
			let submit = document.getElementById('displayed');
			submit.style.backgroundColor = 'gray';
			submit.style.cursor = 'not-allowed';
			submit.disabled = true;
		} else {
			let submit = document.getElementById('displayed');
			submit.style.backgroundColor = '#ff6600';
			submit.style.cursor = 'pointer';
			submit.disabled = false;
		}
	} else if (code == 'ArrowLeft' && document.getElementById(1).className != 'square2' && document.getElementById(9).className != 'square2' && document.getElementById(17).className != 'square2' && document.getElementById(25).className != 'square2' && document.getElementById(33).className != 'square2' && document.getElementById(41).className != 'square2' && txt.matches(':focus') == false) {
		for (let index = 1; index <= 48; index++) {
			var grid = document.getElementById(index);
			if (grid.className == 'square2') {
				let square = document.getElementById(index - 1);
				square.className = 'square2';
				if (grid.innerHTML[2] == '_') {
					grid.className = 'squareT';
				} else {
					grid.className = 'square1';
				}
			}
		}
		let coun = 0;
		for (let index = 1; index <= 48; index++) {
			var grid = document.getElementById(index);
			if (grid.innerHTML[2] == '_' && grid.className == 'square2') {
				coun += 1;
			}
		}
		if (coun != 0) {
			let submit = document.getElementById('displayed');
			submit.style.backgroundColor = 'gray';
			submit.style.cursor = 'not-allowed';
			submit.disabled = true;
		} else {
			let submit = document.getElementById('displayed');
			submit.style.backgroundColor = '#ff6600';
			submit.style.cursor = 'pointer';
			submit.disabled = false;
		}
	} else if (code == 'ArrowUp' && document.getElementById(1).className != 'square2' && document.getElementById(2).className != 'square2' && document.getElementById(3).className != 'square2' && document.getElementById(4).className != 'square2' && document.getElementById(5).className != 'square2' && document.getElementById(6).className != 'square2' && document.getElementById(7).className != 'square2' && document.getElementById(8).className != 'square2' && txt.matches(':focus') == false) {
		for (let index = 1; index <= 48; index++) {
			var grid = document.getElementById(index);
			if (grid.className == 'square2') {
				let square = document.getElementById(index - 8);
				square.className = 'square2';
				if (grid.innerHTML[2] == '_') {
					grid.className = 'squareT';
				} else {
					grid.className = 'square1';
				}
			}
		}
		let coun = 0;
		for (let index = 1; index <= 48; index++) {
			var grid = document.getElementById(index);
			if (grid.innerHTML[2] == '_' && grid.className == 'square2') {
				coun += 1;
			}
		}
		if (coun != 0) {
			let submit = document.getElementById('displayed');
			submit.style.backgroundColor = 'gray';
			submit.style.cursor = 'not-allowed';
			submit.disabled = true;
		} else {
			let submit = document.getElementById('displayed');
			submit.style.backgroundColor = '#ff6600';
			submit.style.cursor = 'pointer';
			submit.disabled = false;
		}
	} else if (code == 'ArrowDown' && document.getElementById(41).className != 'square2' && document.getElementById(42).className != 'square2' && document.getElementById(43).className != 'square2' && document.getElementById(44).className != 'square2' && document.getElementById(45).className != 'square2' && document.getElementById(46).className != 'square2' && document.getElementById(47).className != 'square2' && document.getElementById(48).className != 'square2' && txt.matches(':focus') == false) {
		for (let index = 40; index >= 1; index--) {
			var grid = document.getElementById(index);
			if (grid.className == 'square2') {
				let square = document.getElementById(index + 8);
				square.className = 'square2';
				if (grid.innerHTML[2] == '_') {
					grid.className = 'squareT';
				} else {
					grid.className = 'square1';
				}
			}
		}
		let coun = 0;
		for (let index = 1; index <= 48; index++) {
			var grid = document.getElementById(index);
			if (grid.innerHTML[2] == '_' && grid.className == 'square2') {
				coun += 1;
			}
		}
		if (coun != 0) {
			let submit = document.getElementById('displayed');
			submit.style.backgroundColor = 'gray';
			submit.style.cursor = 'not-allowed';
			submit.disabled = true;
		} else {
			let submit = document.getElementById('displayed');
			submit.style.backgroundColor = '#ff6600';
			submit.style.cursor = 'pointer';
			submit.disabled = false;
		}
	}
});
// Calls

sizes.addEventListener('change', displayTemplate);

type.addEventListener('change', function() {
	let img = document.getElementById('ImageSelector');
	let txt = document.getElementById('textInput');
	if (type.value == 'Image') {
		img.style.display = 'block';
		txt.style.display = 'none';
	} else {
		img.style.display = 'none';
		txt.style.display = 'block';
	}
});

document.getElementById('rotate').addEventListener('click', rotateTemplate)
document.getElementById('displayed').addEventListener('click', submitTemplate)
document.getElementById('submitToDb').addEventListener('click', submitTemplateToDatabase)

templateSelect.addEventListener('change', getTemplates)