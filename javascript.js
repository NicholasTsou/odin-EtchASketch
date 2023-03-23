//grabbing all the buttons
const smallBtn = document.querySelector('#small1');
const medBtn = document.querySelector('#medium1');
const largeBtn = document.querySelector('#large1')
const chooseBtn = document.querySelector('#colorpicker');
const blackBtn = document.querySelector('#black1');
const rainbowBtn = document.querySelector('#rainbow1');
const eraseBtn = document.querySelector('#erase1');

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

function resetGrid(){
    grid.innerHTML = '';
}

smallBtn.addEventListener('click', () =>{
    resetGrid();
    createGrid(12);
});

medBtn.addEventListener('click', () =>{
    resetGrid();
    createGrid(20);
})

largeBtn.addEventListener('click', () =>{
    resetGrid();
    createGrid(44);
})

blackBtn.addEventListener('click', () =>{
    generateColor("black")
})

rainbowBtn.addEventListener('click', () =>{
    generateColor("rainbow");
})

chooseBtn.addEventListener('click', () =>{
    generateColor("choose");
})
eraseBtn.addEventListener('click', () =>{
    let squares = document.querySelectorAll(".cells");

    //for each to grab all the squares in the grid 
    //changes it back to original color
    squares.forEach(square =>{
        square.style.backgroundColor = "#e1cece";
    });
})

function generateColor(color){
    let squares = document.querySelectorAll(".cells");

    squares.forEach(square =>{
        square.addEventListener('mouseover', () =>{
            if (color === "black"){
                square.style.backgroundColor = color;
            } else if (color === "rainbow"){
                square.style.backgroundColor = `${randomColor()}`;
            } else if(color === "choose"){
                square.style.backgroundColor = `${pickColor()}`;
            }

            
        });
    });
}

//FUNCTION TO RETURN A RANDOM COLOR
function randomColor(){ 
    let random = Math.floor(Math.random()*16777215).toString(16);
    let rand = random.padStart(6,0);

    return "#" + rand;
    
}

function pickColor(){
    let colorr = chooseBtn.value;

    return colorr;
}







startingGrid();
