const numRows = 3;
const numCols = 3;
const numTiles = numRows * numCols;
let tiles = [];

// Initialize tiles with numbers 1 to 8 and a blank space
for (let i = 1; i <= numTiles - 1; i++) { // Adjusted loop condition
    tiles.push(i);
}
tiles.push(null);  // Representing the empty space

function shuffleTiles() {
    for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
}

shuffleTiles();

function renderBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';

    for (let i = 0; i < tiles.length; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        if (tiles[i] === null) {
            tile.textContent = '';
        } else {
            tile.textContent = tiles[i];
        }
        board.appendChild(tile);

        // Add event listener to each tile after creation
        tile.addEventListener('click', function() {
            moveTile(i); // Pass current index i to moveTile function
        });
    }
}

renderBoard();

function moveTile(index) {
    // Check if the clicked tile is adjacent to the blank space
    const blankIndex = tiles.indexOf(null);
    const row = Math.floor(index / numCols);
    const col = index % numCols;
    const blankRow = Math.floor(blankIndex / numCols);
    const blankCol = blankIndex % numCols;

    if ((Math.abs(row - blankRow) === 1 && col === blankCol) ||
        (Math.abs(col - blankCol) === 1 && row === blankRow)) {
        // Swap the clicked tile with the blank space
        [tiles[index], tiles[blankIndex]] = [tiles[blankIndex], tiles[index]];
        renderBoard();
        checkWin();
    }
}

function checkWin() {
    const solution = [...tiles].sort((a, b) => a - b);
    if (JSON.stringify(tiles) === JSON.stringify(solution)) {
        alert('Congratulations! You solved the puzzle.');
    }
}
