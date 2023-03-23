//grabbing all the buttons
const smallBtn = document.querySelector('#small1');
const medBtn = document.querySelector('#medium1');
const largeBtn = document.querySelector('#large1')
const chooseBtn = document.querySelector('#pick1');
const blackBtn = document.querySelector('#black1');
const rainbowBtn = document.querySelector('#rainbow1');
const erase1 = document.querySelector('#erase');

const grid = document.getElementById('grid-container');

let cellSize;

function createGrid(boxes){
    let size = boxes * boxes;

    grid.style.setProperty('--gridRow', boxes);
    grid.style.setProperty('--gridCol', boxes);

    for(let i = 0; i < size; i++){
        cellSize = document.createElement('div');

        grid.appendChild(cellSize).className = "cells";
    }
};

function startingGrid(){
    createGrid(12);
}
smallBtn.addEventListener('click', () =>{
    createGrid(12);
});


startingGrid();
