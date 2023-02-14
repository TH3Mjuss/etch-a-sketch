const board = document.getElementById("sketch");

console.log(board);

function gridSize(defaultSize) {
    
    if (board.childElementCount != 0) {
        console.log('KO');
        board.innerHTML = '';
    }

    let size = Number(prompt("Choose your desired grid size (max 100):", "16"));

    if (size < 4 || size > 100) {
        alert("Incorrect size. Size expected between 4 and 100. Default size set to 16.")
        size = defaultSize;
    }


    let totalSize = size * size;

    console.log("grid size will be: " + totalSize);

    for (i = 0; i < totalSize; i++) {
        const div = document.createElement('div');
        div.innerText="i";
        board.appendChild(div);
    }

    console.log("i = " + i)

//    return totalSize;
};

console.log("Grid size: " + board.childElementCount);