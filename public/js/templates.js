
var container = document.getElementById('display');

for (let index = 1; index < 48; index++) {
	var grid = document.createElement('div');
	grid.classList.add('grid');
	grid.className = `square1`;
	grid.id = index;
	grid.setAttribute('onclick', 'changeColor(this)');
	container.appendChild(grid);
}

function changeColor(element) {
	if (element.className == 'square1') {
		element.className = 'square2';
	} else if (element.className == 'square2') {
		element.className = 'square1';
	}
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