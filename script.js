const board = document.getElementById("sketch");

for (i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.innerText="Woop";
    board.appendChild(div);
}

console.log("Grid size: " + board.childElementCount);

function gridSize() {
    let size= Number(prompt("Choose your desired grid size (max 100):", "16"));

    console.log(typeof(size));

    console.log("grid size will be: " + size);
};