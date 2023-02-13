const DEFAULT_GRID_SIZE = 16;

//grid elements
let gridContainer = document.querySelector(".gridContainer");
let gridSizeSlider = document.querySelector('#gridSizeSlider');
let displayedGridSize = document.querySelector('#displayedGridSize');

let currentGridSize = DEFAULT_GRID_SIZE;
let columns;
let rows;

//button elements
const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', clearGrid());

//Change grid size value in HTML
gridSizeSlider.onchange = (e) => updateDisplayedGridSize(e.target.value);
gridSizeSlider.onchange = (e) => changeGridSize(e.target.value);

createGrid(currentGridSize, currentGridSize);

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

function updateDisplayedGridSize(size) {
    clearGrid();
    displayedGridSize.innerHTML = `Grid Size: ${size} x ${size}` 
}

function setCurrentGridSize(size) {
    currentGridSize = size;
}

function changeGridSize(size) {
    setCurrentGridSize(size);
    updateDisplayedGridSize(size);
    reloadGrid();
}

function reloadGrid() {
    clearGrid();
    createGrid(currentGridSize, currentGridSize);
}

console.log(currentGridSize);

// When button is pressed, clear the grid

function clearGrid() {
    gridContainer.innerHTML = '';
}

function standardGridProperties(cell) {
    cell.style.backgroundColor = 'white';
    cell.style.border = 'solid black 1px';
}

console.log(gridSizeSlider.value);

//Yesterday created a clear function. Need to add a pen tool function
// and function for other buttons. Work on this!