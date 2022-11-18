
var container = document.getElementById('display');

for (let index = 0; index < 48; index++) {
	var grid = document.createElement('div');
	grid.classList.add('grid');
	grid.className = 'square';
	grid.id = 1;
	grid.setAttribute('onclick', 'changeColor(this)');
	container.appendChild(grid);


	
}

function changeColor(element) {
	if (element.id == 1) {
		element.id = 2;
		element.style.backgroundColor = 'red';
	} else if (element.id == 2) {
		element.id = 1;
		element.style.backgroundColor = '#d2d2d2';
	}
}