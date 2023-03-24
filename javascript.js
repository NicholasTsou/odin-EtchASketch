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

//creating a grid depending on the boxes making it a square
function createGrid(boxes){
    let size = boxes * boxes;

    grid.style.setProperty('--gridRow', boxes);
    grid.style.setProperty('--gridCol', boxes);

    //for loop the creates each individual div and names it cells
    for(let i = 0; i < size; i++){
        cellSize = document.createElement('div');
        
        grid.appendChild(cellSize).className = "cells";
    }
};

//create grid when page gets loaded
function startingGrid(){
    createGrid(12);
}

//function to resetGrid
function resetGrid(){
    grid.innerHTML = '';
}

//function to change grid to small
smallBtn.addEventListener('click', () =>{
    resetGrid();
    createGrid(12);
});

//function to change grid to medium
medBtn.addEventListener('click', () =>{
    resetGrid();
    createGrid(20);
})

//function to change grid to large
largeBtn.addEventListener('click', () =>{
    resetGrid();
    createGrid(44);
})

//function to change color to black
blackBtn.addEventListener('click', () =>{
    generateColor("black")
})

//function to change color to rainbow
rainbowBtn.addEventListener('click', () =>{
    generateColor("rainbow");
})

//function to change color to color picker
chooseBtn.addEventListener('click', () =>{
    generateColor("choose");
})

//function to erase the entire grid
eraseBtn.addEventListener('click', () =>{
    let squares = document.querySelectorAll(".cells");

    //for each to grab all the squares in the grid 
    //changes it back to original color
    squares.forEach(square =>{
        square.style.backgroundColor = "#e1cece";
    });
})

//function to see what button was picked
//and then set the mouse over color to that
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

//function that grabs whatever color was picked from color picker
function pickColor(){
    let colorr = chooseBtn.value;

    return colorr;
}

//set starting grid
startingGrid();
