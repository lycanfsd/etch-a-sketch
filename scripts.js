let gridContainer = document.querySelector(".gridContainer");


createGrid(16, 16);

// Take input for grid dimensions and create grid

function createGrid(columns, rows) {
    for (i = 0; i < columns * rows; i++) {
       let cell = document.createElement('div');
       cell.classList.add('tile');
       cell.id = "cell" + i;
       standardGridProperties(cell);
       gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
       gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
       gridContainer.appendChild(cell);
    }
}

// When button is pressed, clear the grid

function clearGrid() {

}

function standardGridProperties(cell) {
    cell.style.backgroundColor = 'orange';
    cell.style.border = 'solid black 1px';
}

//Grid wont make rows and columns. Work on it.