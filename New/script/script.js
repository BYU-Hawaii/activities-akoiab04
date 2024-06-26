const numRows = 3;
const numCols = 3;
const numTiles = numRows * numCols;
let tiles = [];

// Initialize tiles with numbers 1 to 8 and a blank space
for (let i = 1; i <= numTiles - 1; i++) {
    tiles.push(i);
}
tiles.push(null); // Representing the empty space

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
        congratulatePlayer(); // Call function to congratulate player
    }
}

function congratulatePlayer() {
    const section = document.querySelector('section');
    const congratsMessage = document.createElement('p');
    congratsMessage.textContent = 'Congratulations! You solved the puzzle.';
    section.appendChild(congratsMessage);
}

document.getElementById('ratingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var comments = document.getElementById('comments').value;
    var rating = document.getElementById('rating').value;

    var  nameValid = /^[a-zA-Z]{3,}$/.test(name);
    var emailValid =/^[^@]+@\w+(\.\w+)+\w$/.test(email);
    var commentsValid = comments.trim() !== '';
    var ratingValid = rating >= 1 && rating <=5;

    document.getElementById('nameFeedback').style.display = nameValid ? 'none' : 'block';
    document.getElementById('emailFeedback').style.display = emailValid ? 'none' : 'block';
    document.getElementById('commentFeedback').style.display = commentsValid ? 'none' : 'block';
    document.getElementById('ratingFeedback').style.display = ratingValid ? 'none' : 'block';

    document.getElementById('nameFeedback').textContent = nameValid ? '': 'Please Enter your name';
    document.getElementById('emailFeedback').textContent = emailValid ? '' : 'Please enter a valid email address.';
    document.getElementById('commentsFeedback').textContent = commentsValid ? '' : 'Please give comments';
    document.getElementById('ratingFeedback').textContent = ratingValid ? ' ': 'Please give rate.';

    var formValid = nameValid && emailValid && commentsValid && ratingValid;

    if (formValid) {
        document.getElementById('ratingsFeedback').textContent = 'Your rating was accepted!';
        document.getElementById('ratingsFeedback').style.display = 'block';
        // Here you can also handle the form submission, e.g. send data to the server
    } else {
        document.getElementById('ratingsFeedback').textContent = '';
        document.getElementById('ratingsFeedback').style.display = 'none';
    }
});

