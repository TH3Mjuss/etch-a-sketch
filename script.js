const board = document.getElementById("sketch");

console.log(board);

//Populate Grid
function gridSize(defaultSize) {
    
    if (board.childElementCount != 0) {
        console.log('KO');
        board.innerHTML = '';
    }

    let size = Number(prompt("Choose your desired grid size (max 100):", defaultSize));

    if (size < 4 || size > 100) {
        alert("Incorrect size. Size expected between 4 and 100. Default size set to 16.")
        size = defaultSize;
    }


    let totalSize = size * size;

    board.style.setProperty("--grid-size", size);  // send grid size to CSS

    console.log("grid size will be: " + totalSize);

    for (i = 0; i < totalSize; i++) {
        const div = document.createElement('div');
        div.innerText="i";
        board.appendChild(div);
    }

    console.log("i = " + i);
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