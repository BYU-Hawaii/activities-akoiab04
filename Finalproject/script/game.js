const boardSize = 100;  // Size of the board
let board = new Array(boardSize).fill(0);

const snakesAndLadders = {
    16: -10,  // Snake from 16 to 6
    47: -20,  // Snake from 47 to 27
    49: 20,   // Ladder from 49 to 69
    62: -15   // Snake from 62 to 47
};
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function movePlayer(player, steps) {
    // Move player 'steps' number of steps forward
    player.position += steps;
    
    // Check for snakes and ladders
    if (snakesAndLadders[player.position]) {
        player.position += snakesAndLadders[player.position];
    }
    
    // Check if player reaches or passes the last square
    if (player.position >= boardSize - 1) {
        console.log(`Player ${player.id} wins!`);
        // Game end logic
    }
}
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function movePlayer(player, steps) {
    // Move player 'steps' number of steps forward
    player.position += steps;
    
    // Check for snakes and ladders
    if (snakesAndLadders[player.position]) {
        player.position += snakesAndLadders[player.position];
    }
    
    // Check if player reaches or passes the last square
    if (player.position >= boardSize - 1) {
        console.log(`Player ${player.id} wins!`);
        // Game end logic
    }
}
