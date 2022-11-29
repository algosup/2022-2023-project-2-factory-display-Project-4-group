
var container = document.getElementById('display');
let squares = 0;
let last = 0;


for (let index = 1; index <= 48; index++) {
	var grid = document.createElement('div');
	grid.classList.add('grid');
	grid.className = `square1`;
	grid.id = index;
	grid.setAttribute('onclick', 'changeColor(this)');
	container.appendChild(grid);
}

// Display the selected template size
function displayTemplate(){
	let element = document.getElementById('sizes');
	var rows = element.options[element.selectedIndex].value[0];
	var columns = element.options[element.selectedIndex].value[2];
	console.log(rows, columns);
	displaySelected(rows, columns);
}


function displaySelected(rows, columns){
	for (let index = 1; index <= 48; index++) {
		var grid = document.getElementById(index);
		grid.className = `square1`;
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

function changeColor(element) {
	if (element.className == 'square1') {
		if (squares > 0) {
			// console.log(element.id, last, squares, element.className);
			if (element.id == (last -(-1))){
				console.log(+1);
				element.className = 'square2';
				squares++;
				last = element.id;
			}
			else if (element.id == last -1){
				element.className = 'square2';
				squares++;
				last = element.id;
				console.log(-1);
			} 
			else if (element.id == (last -(-8))){
				element.className = 'square2';
				squares++;
				last = element.id;
				console.log(+8);
			}
			else if (element.id == last -8){
				element.className = 'square2';
				squares++;
				last = element.id;
				console.log(-8);
			}
		}
		else {
			// console.log(element.id)
			element.className = 'square2';
			squares++;
			last = element.id;
		}
		// squares++;
		// element.className = 'square2';
	} else if (element.className == 'square2') {
		element.className = 'square1';
		squares--;
	}
	// console.log(squares);
}

// Comment bloquer les cases ?
// Si, détection d'une case avec square2, alors seules les cartes avec un id égal à
// id + 1, id - 1, id + 8, id - 8 peuvent être cliquées

// Essai d'une fonction qui vérifie si une case est déjà cliquée
// function isDifferent() {
// 	var grid = document.getElementsByClassName('grid');
// 	for (i = 0; i < grid.length; i++) {
// 		if (grid[i].className == 'square2') {
// 			return grid[i].id;
// 		}
// 	}
// }	


// Essai d'une fonction qui bloque les cases
// function block() {
// 	var grid = document.getElementsByClassName('grid');
// 	for (i = 0; i < grid.length; i++) {
// 		if (grid[i].id == isDifferent() + 1 || grid[i].id == isDifferent() - 1 || grid[i].id == isDifferent() + 8 || grid[i].id == isDifferent() - 8) == false {
// 			grid[i].setAttribute('onclick', 'null');
// 		}
// 	}
// }