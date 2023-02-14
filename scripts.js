const DEFAULT_GRID_SIZE = 16;

//grid elements
let gridContainer = document.querySelector(".gridContainer");
let gridSizeSlider = document.querySelector('#gridSizeSlider');
let displayedGridSize = document.querySelector('#displayedGridSize');

let currentGridSize = DEFAULT_GRID_SIZE;
let columns;
let rows;

//button elements
let activeButton;
const button = document.querySelectorAll('button');
const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', () => reloadGrid());
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', () => reset());
const penButton = document.querySelector('#penButton');
penButton.addEventListener('click', () => selectButton(penButton));
const eraserButton = document.querySelector('#eraserButton');
eraserButton.addEventListener('click', () => selectButton(eraserButton));
const fillButton = document.querySelector('#fillButton');
fillButton.addEventListener('click', () => selectButton(fillButton));
const eyedropperButton = document.querySelector('#eyedropperButton');
eyedropperButton.addEventListener('click', () => selectButton(eyedropperButton));
const rainbowButton = document.querySelector('#rainbowButton');
rainbowButton.addEventListener('click', () => selectButton(rainbowButton));

//color values
let primaryColor = document.querySelector('#primary-color');
let secondaryColor = document.querySelector('#secondary-color');

//Change grid size value in HTML
gridSizeSlider.onchange = (e) => updateDisplayedGridSize(e.target.value);
gridSizeSlider.onchange = (e) => changeGridSize(e.target.value);

createGrid(currentGridSize, currentGridSize);

// Take input for grid dimensions and create grid

function createGrid(columns, rows) {
    for (i = 0; i < columns * rows; i++) {
       let cell = document.createElement('div');
       cell.addEventListener('mouseover', () => {cell.style.backgroundColor = primaryColor.value});
       cell.classList.add('tile');
       cell.id = "cell" + i; //goes from 0 to 255 squares (total 256)
       standardGridProperties(cell);
       gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
       gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
       gridContainer.appendChild(cell);
    }
}

function changeColor(cell) {
    cell.style.backgroundColor = primaryColor.value;
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

function reset() {
    currentGridSize = DEFAULT_GRID_SIZE;
    updateDisplayedGridSize(currentGridSize);
    gridSizeSlider.value = DEFAULT_GRID_SIZE;
    reloadGrid();
}

function clearGrid() {
    gridContainer.innerHTML = '';
    button.forEach((selection) => {selection.classList.remove('activeButton')});
}

function standardGridProperties(cell) {
    cell.style.backgroundColor = 'white';
    cell.style.border = 'solid black 1px';
}

function selectButton(selectedButton) {
    if (selectedButton.classList.contains('toolButton') === true) {
        button.forEach((selection) => {selection.classList.remove('activeButton')});
    }
    selectedButton.classList.add('activeButton');
}


//Pen works on mouse hover but not on mouse click hold. Need to implement this.