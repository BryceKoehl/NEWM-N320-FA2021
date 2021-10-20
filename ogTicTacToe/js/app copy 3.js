const statusDisplay = document.querySelector('.gameStatus');

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let game = document.getElementById('cellid');

let gameStatus = true;

let currentPlayer = "X";

//thanks you Chloe for the syntax! :)
class Game {
    constructor(gameState = ["", "", "", "", "", "", "", "", ""]) {
        this.gameState = gameState;

    }
}


const youWin = () => `Player ${currentPlayer} has won!`;
const itsADraw = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.restartButton').addEventListener('click', handleRestartGame);

function handleCellClick(clickedCellEvent) {

    const clickedCell = clickedCellEvent.target;

    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('cellid')
    );

    console.log(clickedCellIndex);

    if (this.gameState[clickedCellIndex] !== "" || !gameStatus) {
        return;
    }
    handleCellPlayed(clickedCell, clickedCellIndex);
    checkWin();
}

function handleCellPlayed(clickedCell, clickedCellIndex) {

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function checkWin() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winConditions[i];
        let a = this.gameState[winCondition[0]];
        let b = this.gameState[winCondition[1]];
        let c = this.gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        statusDisplay.innerHTML = youWin();
        gameStatus = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = itsADraw();
        gameStatus = false;
        return;
    }

    handlePlayerChange();
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHMTL = currentPlayerTurn();
}

function handleRestartGame() {
    gameStatus = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell')
        .forEach(cell => cell.innerHTML = "");
}
