const container = document.querySelector('#container');
let mouseDown = false;
let gridSize = 16;
let squareSize = 600 / gridSize;
const button = document.querySelector("button");
button.addEventListener('click', (event) => {
    let size = prompt("What would you like your grid size to be? (1-100)");
    squareSize = 600 / changeGridSize(size);
    if(isNaN(size) == false){
        destroyGrid();
        createGrid(changeGridSize(size));
    }
    else{
        alert(size + " is not a valid number!")
    }
})
createGrid(gridSize);

function destroyGrid(){
    container.innerHTML = "";
}

function createGrid(size){
    for(let i = 0; i < size; i++){
        const row = document.createElement('div');
        row.classList.add("row");
        for(let i = 0; i < size; i++){
            const square = document.createElement('div');
            square.classList.add("square");
            square.addEventListener('mouseover', (event) => {
                if(mouseDown){
                    square.style.cssText = "background-color: white;" + "min-height:" + squareSize + "px; min-width:" + squareSize + "px;";
                }
            });
            square.addEventListener('click', (event) => {
                    square.style.cssText = "background-color: white;" + "min-height:" + squareSize + "px; min-width:" + squareSize + "px;";
            });
            square.style.cssText = "min-height:" + squareSize + "px; min-width:" + squareSize + "px;"
            console.log("min-height:" + squareSize + "px; min-width:" + squareSize + "px;");
            row.appendChild(square);
            
        }
        container.appendChild(row);
    }
}
document.body.onmousedown = function() {
    mouseDown = true;
};

document.body.onmouseup = function() {
    mouseDown = false;
};

function changeGridSize(size){
    if(size <= 1){
        return 1;
    }
    if(size >= 100){
        return 100;
    }
    return size;
}
