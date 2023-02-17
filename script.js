const board = document.getElementById("sketch");

//Populate default grid
if (board.childElementCount == 0) {
    console.log("Empty Sketch! Populating default grid...");
    
    board.style.setProperty("--grid-size", 16);

    for (i = 0; i < 256; i++) {
        const div = document.createElement('div');
        board.appendChild(div);
    }
}

function customSize() {

    let size = Number(prompt("Choose your desired grid size (max 100):", "From 4 to 100"));
    gridSize(size);

}

//Populate Grid from size buttons
function gridSize(defaultSize) {

    if (board.childElementCount != 0) {
        console.log('Sketch board already populated, emptying...');
        board.innerHTML = '';
    }
    
    if (defaultSize < 4 || defaultSize > 100 || isNaN(defaultSize)) {
        alert("Incorrect size. Size expected between 4 and 100. Default size set to 16.")
        defaultSize = 16;
    }

    let totalSize = defaultSize * defaultSize;

    board.style.setProperty("--grid-size", defaultSize);  // send grid size to CSS

    console.log("Grid size will be: " + totalSize);

    for (i = 0; i < totalSize; i++) {
        const div = document.createElement('div');
        board.appendChild(div);
    }

};

// Change grid elements color on mouse over
function paintDOM(clr) {
    board.addEventListener("mouseover", function(event) {
        //event.target.style.color = "$clr";
        board.style.setProperty("--clr", clr);
       /*  setTimeout(function() {
            event.target.style.color = "";
        }, 500); */
    }, false);
    return clr;
}

console.log("Grid size: " + board.childElementCount);