
// import { initializeFirebase } from "./firebase.js";
// import { getFirestore, getDocs, collection, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";var container = document.getElementById('display');


var container = document.getElementById('display');
var container2 = document.getElementById('display2');
let squares = 0;
let last = 0;
let rot = 0;
let sizes = document.getElementById('sizes');
let type = document.getElementById('selectType');
let rotate = document.getElementById('rotate');
let colorsIndex = 0;
let colors = ['#03045E', '#0077B6', '#00B4D8', '#90E0EF', '#03254C', '#1167B1', '#187BCD', '#2A9DF4', '#D0EFFF', '#0000FF', '#003CFF', '#07006B', '#3C00FF', '#043E7D'];

let row = 1;
let column = 0;



// var app = initializeFirebase();
// var db = getFirestore(app);



for (let index = 1; index <= 48; index++) {
	var grid = document.createElement('div');
	grid.classList.add('grid');
	if (index == 1){
		grid.className = 'square2';
	} else {
		grid.className = `square1`;
	}
	grid.id = index;
	column += 1;
	if (index%8 == 0){
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
function displayTemplate(){
	rotate.setAttribute('onclick', 'rotateTemplate()');
	var rows = sizes.options[sizes.selectedIndex].value[0];
	var columns = sizes.options[sizes.selectedIndex].value[2];
	displaySelected(rows, columns);
	let coun = 0;
	for (let index = 1; index <= 48; index++) {
		var grid = document.getElementById(index);
		if (grid.innerHTML[2] == '_' && grid.className == 'square2'){
			coun += 1;
		}
	}
	if (coun != 0){
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
	if (sizes.options[sizes.selectedIndex].value[0] == sizes.options[sizes.selectedIndex].value[2] || sizes.options[sizes.selectedIndex].value[2] == 8){
		rotate.style.backgroundColor = 'gray';
		rotate.style.cursor = 'not-allowed';
		rotate.disabled = true;
	}
	else {
		rotate.style.backgroundColor = '#ff6600';
		rotate.style.cursor = 'pointer';
		rotate.disabled = false;
	}
}

function rotateTemplate(){
	if (rot == 0 && sizes.options[sizes.selectedIndex].value[2] != 8){
		var rows = sizes.options[sizes.selectedIndex].value[2];
		var columns = sizes.options[sizes.selectedIndex].value[0];
		console.log(rows, columns);
		displaySelected(rows, columns);
		rot = 1;
	}
	else if (rot == 1 && sizes.options[sizes.selectedIndex].value[2] != 8){
		var rows = sizes.options[sizes.selectedIndex].value[0];
		var columns = sizes.options[sizes.selectedIndex].value[2];
		console.log(rows, columns);
		displaySelected(rows, columns);
		rot = 0;
	}
}

function displaySelected(rows, columns){
	for (let index = 1; index <= 48; index++) {
		var grid = document.getElementById(index);
		if (grid.className == 'square2'){
			if (grid.innerHTML[2] == '_'){
				grid.className = 'squareT';
			} else {
				grid.className = `square1`;
			}
		}
	}
	var count = 1;
	for (let rowsIndex = 1; rowsIndex <= rows; rowsIndex++) {
		for (let columnsIndex = 1; columnsIndex <= columns; columnsIndex++) {
			var grid = document.getElementById(count);
			grid.className = `square2`;
			count+=1;
		}
	count -= (columns);
	count += 8
	}
}


function submitTemplate(){
	let color = colors[colorsIndex];
	for (let index = 1; index <= 48; index++) {
		var grid = document.getElementById(index);
		if (grid.className == 'square2'){
			let square = document.getElementById(index + 48);
			square.className = 'squareD';
			square.style.backgroundColor = color;
			grid.innerHTML = grid.innerHTML[0] + grid.innerHTML[1] + '_';
			grid.className = 'squareT';
		}
	}
	colorsIndex += 1;
}



let txt = document.getElementById('textInput');
document.addEventListener('keydown', function(e) {
		let code = e.code;
		if (code == 'ArrowRight'&& document.getElementById(8).className != 'square2' && document.getElementById(16).className != 'square2' && document.getElementById(24).className != 'square2' && document.getElementById(32).className != 'square2' && document.getElementById(40).className != 'square2' && document.getElementById(48).className != 'square2' && txt.matches(':focus') == false){
		for (let index = 47; index >= 1; index--) {
			var grid = document.getElementById(index);
			if (grid.className == 'square2'){
				let square = document.getElementById(index +1);
				square.className = 'square2';
				if (grid.innerHTML[2] == '_'){
					grid.className = 'squareT';
				} else {
					grid.className = 'square1';
				}
			}
		}
		let coun = 0;
		for (let index = 1; index <= 48; index++) {
			var grid = document.getElementById(index);
			if (grid.innerHTML[2] == '_' && grid.className == 'square2'){
				coun += 1;
			}
		}
		if (coun != 0){
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
		else if (code == 'ArrowLeft' && document.getElementById(1).className != 'square2' && document.getElementById(9).className != 'square2' && document.getElementById(17).className != 'square2' && document.getElementById(25).className != 'square2' && document.getElementById(33).className != 'square2' && document.getElementById(41).className != 'square2' && txt.matches(':focus') == false){
		for (let index = 1; index <= 48; index++) {
			var grid = document.getElementById(index);
			if (grid.className == 'square2'){
				let square = document.getElementById(index -1);
				square.className = 'square2';
				if (grid.innerHTML[2] == '_'){
					grid.className = 'squareT';
				} else {
					grid.className = 'square1';
				}
			}
		}
		let coun = 0;
		for (let index = 1; index <= 48; index++) {
			var grid = document.getElementById(index);
			if (grid.innerHTML[2] == '_' && grid.className == 'square2'){
				coun += 1;
			}
		}
		if (coun != 0){
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
		else if (code == 'ArrowUp' && document.getElementById(1).className != 'square2' && document.getElementById(2).className != 'square2' && document.getElementById(3).className != 'square2' && document.getElementById(4).className != 'square2' && document.getElementById(5).className != 'square2' && document.getElementById(6).className != 'square2' && document.getElementById(7).className != 'square2' && document.getElementById(8).className != 'square2' && txt.matches(':focus') == false){
		for (let index = 1; index <= 48; index++) {
			var grid = document.getElementById(index);
			if (grid.className == 'square2'){
				let square = document.getElementById(index -8);
				square.className = 'square2';
				if (grid.innerHTML[2] == '_'){
					grid.className = 'squareT';
				} else {
					grid.className = 'square1';
				}
			}
		}
		let coun = 0;
		for (let index = 1; index <= 48; index++) {
			var grid = document.getElementById(index);
			if (grid.innerHTML[2] == '_' && grid.className == 'square2'){
				coun += 1;
			}
		}
		if (coun != 0){
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
		else if (code == 'ArrowDown' && document.getElementById(41).className != 'square2' && document.getElementById(42).className != 'square2' && document.getElementById(43).className != 'square2' && document.getElementById(44).className != 'square2' && document.getElementById(45).className != 'square2' && document.getElementById(46).className != 'square2' && document.getElementById(47).className != 'square2' && document.getElementById(48).className != 'square2' && txt.matches(':focus') == false){
		for (let index = 40; index >= 1; index--) {
			var grid = document.getElementById(index);
			if (grid.className == 'square2'){
				let square = document.getElementById(index +8);
				square.className = 'square2';
				if (grid.innerHTML[2] == '_'){
					grid.className = 'squareT';
				} else {
					grid.className = 'square1';
				}
			}
		}
		let coun = 0;
		for (let index = 1; index <= 48; index++) {
			var grid = document.getElementById(index);
			if (grid.innerHTML[2] == '_' && grid.className == 'square2'){
				coun += 1;
			}
		}
		if (coun != 0){
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

type.addEventListener('change', function(){
	let img = document.getElementById('ImageSelector');
	let txt = document.getElementById('textInput');
	if (type.value == 'Image'){
		img.style.display = 'block';
		txt.style.display = 'none';
	} else {
		img.style.display = 'none';
		txt.style.display = 'block';
	}
});