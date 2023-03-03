const board = document.getElementById("sketch");

//Populate default grid
if (board.childElementCount == 0) {
    console.log("Empty Sketch! Populating default grid...");
    
    board.style.setProperty("--grid-size", 16);
    board.style.setProperty("--div-size", 37.5);

    for (i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", i);
        board.appendChild(div);
    }
}


let customSize = () => {
    let size = Number(prompt("Choose your desired grid size (max 100):", "From 4 to 100"));
    // Check for valid size, then populate grid
    size < 4 || size > 100 || isNaN(size) ? (alert("Incorrect size. Size expected between 4 and 100. Default size set to 16."), size = 16) : size;
    gridSize(size);
};

//Populate Grid from size buttons
let gridSize = defaultSize => {

    if (board.childElementCount != 0) {
        console.log('Sketch board already populated, emptying...');
        board.innerHTML = '';
    }

    let totalSize = defaultSize * defaultSize;
    let divSize = 600 / defaultSize;

    board.style.setProperty("--grid-size", defaultSize);  // send grid size to CSS
    board.style.setProperty("--div-size", divSize); // send sketch pixel size to CSS

    console.log("Grid size will be: " + totalSize);

    for (i = 0; i < totalSize; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", i);
        board.appendChild(div);
    }

};

// Change grid elements color on mouse over
let paintDOM = clr => {
    // Check for mouse state
    let mouseDown = 0;
    board.onmousedown = () => mouseDown = 1;
    board.onmouseup = () => mouseDown = 0;

    
    board.addEventListener("mousemove", function(event) {
        let coloredDiv = event.target.id;
        console.log("Mouse state: " + mouseDown);
        console.log("Colored = " + coloredDiv);

        if(!isNaN(coloredDiv) && mouseDown == 1) {
            let color = document.getElementById(coloredDiv);
            color.style.backgroundColor = clr;
        }
    }, false);
};