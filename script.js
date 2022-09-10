const container = document.querySelector('#container');



for(let i = 0; i < 16; i++){
    const row = document.createElement('div');
    row.classList.add("row");
    console.log("made row");
    for(let i = 0; i < 16; i++){
        const square = document.createElement('div');
        square.classList.add("square");
        row.appendChild(square);
        console.log("added square to row")
    }
    container.appendChild(row);
}