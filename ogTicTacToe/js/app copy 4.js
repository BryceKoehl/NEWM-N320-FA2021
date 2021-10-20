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

const youWin = () => `Player ${currentPlayer} has won!`;
const itsADraw = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;



const statusDisplay = document.querySelector('.gameStatus');

let gameActive = true;

let currentPlayer = "X";



//thanks you Chloe for the syntax! :)
// class GameBoard {
//     constructor(gameState = ["", "", "", "", "", "", "", "", ""]) {
//         this.gameState = gameState;

//     }
// }

let gameState = ["", "", "", "", "", "", "", "", ""];



class Tictactoe {
    constructor() { }

    onLoad() {
        statusDisplay.innerHTML = currentPlayerTurn();
    }


    handleCellClick(clickedCellEvent) {
        document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
        const clickedCell = clickedCellEvent.target;

        const clickedCellIndex = parseInt(
            clickedCell.getAttribute('cell-ix')
        );

        if (gameState[clickedCellIndex] !== "" || !gameActive) {
            return;
        }

        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
    }

    handleCellPlayed(clickedCell, clickedCellIndex) {

        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.innerHTML = currentPlayer;
    }

    handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            let a = gameState[winCondition[0]];
            let b = gameState[winCondition[1]];
            let c = gameState[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break
            }
        }
        if (roundWon) {
            statusDisplay.innerHTML = winningMessage();
            gameActive = false;
            return;
        }

        let roundDraw = !gameState.includes("");
        if (roundDraw) {
            statusDisplay.innerHTML = drawMessage();
            gameActive = false;
            return;
        }

        handlePlayerChange();
    }

    handlePlayerChange() {


        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusDisplay.innerHTML = currentPlayerTurn();
    }

    handleRestartGame() {
        document.querySelector('.restartButton').addEventListener('click', handleRestartGame);

        gameActive = true;
        currentPlayer = "X";
        this.gameState = new GameBoard();
        statusDisplay.innerHTML = currentPlayerTurn();
        document.querySelectorAll('.cell')
            .forEach(cell => cell.innerHTML = "");
    }
}




new Tictactoe();


