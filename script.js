const board = document.getElementById("sketch");

for (i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.innerText="Woop";
    board.appendChild(div);
}

console.log("Grid size: " + board.childElementCount);