class GameBoard {
    constructor(state = ["", "", "", "", "", "", "", "", ""]) {
        this.state = state;
    }
    markCell(idx, piece) {
        //    check if the cell is "";
        //   if !" " then return false
        //   if " " mark the cell with piece
        //   update ui
        // return true
        if (!this.isEmpty(idx)) {
            return false;
        } else {
            this.state[idx] = piece;
            this.updateGameboard(idx);
            return true;
        }
    }
    updateGameboard(idx) {
        let piece = this.state[idx];
        document.getElementById(idx).innerHTML = piece;
    }
    resetGameboard() {
        for (let i = 0; i < this.state.length; i++) {
            this.updateGameboard(i);
        }
    }
    // function to check if a cell is empty
    isEmpty(idx) {
        return this.state[idx] == "";
    }

    // function to check if the GameBoard is filled
    isFilled() {
        for (let i = 0; i < this.state.length; i++) {
            if (this.isEmpty(i)) {
                return false;
            }
        }
        return true;
    }
    // return 0 if no win, continue play
    // return 1 if win conditions met
    // return 2 if cat's game.
    checkWin() {
        if (
            this.state[0] == this.state[1] &&
            this.state[1] == this.state[2] &&
            !this.isEmpty(0)
        ) {
            return 1;
        } else if (
            this.state[3] == this.state[4] &&
            this.state[4] == this.state[5] &&
            !this.isEmpty(3)
        ) {
            return 1;
        } else if (
            this.state[6] == this.state[7] &&
            this.state[7] == this.state[8] &&
            !this.isEmpty(6)
        ) {
            return 1;
        } else if (
            this.state[0] == this.state[3] &&
            this.state[3] == this.state[6] &&
            !this.isEmpty(0)
        ) {
            return 1;
        } else if (
            this.state[1] == this.state[4] &&
            this.state[4] == this.state[7] &&
            !this.isEmpty(1)
        ) {
            return 1;
        } else if (
            this.state[2] == this.state[5] &&
            this.state[5] == this.state[8] &&
            !this.isEmpty(2)
        ) {
            return 1;
        } else if (
            this.state[0] == this.state[4] &&
            this.state[4] == this.state[8] &&
            !this.isEmpty(0)
        ) {
            return 1;
        } else if (
            this.state[2] == this.state[4] &&
            this.state[4] == this.state[6] &&
            !this.isEmpty(2)
        ) {
            return 1;
        } else if (this.isFilled()) {
            return 2;
        }
        return 0;
    }
}

class GamePiece {
    constructor(piece) {
        this.piece = piece;
    }
    getPiece() {
        return this.piece;
    }
}

class Game {
    constructor() { }
    update(idx) {
        // calls markCell passing the current players piece and idx
        if (!this.gameOver) {
            let updated = this.boardState.markCell(
                idx,
                this.currentPlayer.getPiece()
            );
            // if false flash the cell's background color red
            // if true cell has been marked
            // checkwin
            // if win, display winner (current player)
            // else if cats game display tie
            // esle update current player

            if (updated) {
                let winCondition = this.boardState.checkWin();
                if (winCondition == 0) {
                    this.switchPlayer();
                    displayOutput.innerHTML = currentPlayerTurn(this.currentPlayer);
                } else if (winCondition == 1) {
                    displayOutput.innerHTML = winMessage(this.currentPlayer);
                    this.gameOver = true;
                } else {
                    displayOutput.innerHTML = catsGameMessage();
                    this.gameOver = true;
                }
            } else {
                // displayOutput. //flash it red
            }
        }
    }

    switchPlayer() {
        if (this.currentPlayer == this.X) {
            this.currentPlayer = this.O;
        } else {
            this.currentPlayer = this.X;
        }
    }
    startGame() {
        //
        this.gameOver = false;
        // create the two players
        this.X = new GamePiece("X");
        this.O = new GamePiece("O");

        // create the GameBoard
        this.boardState = new GameBoard();
        this.boardState.resetGameboard();
        // set current player
        this.currentPlayer = this.X;

        displayOutput.innerHTML = currentPlayerTurn(this.currentPlayer);
    }
}

let game = new Game();

/// Event listeners for the cells
document
    .querySelectorAll(".cell")
    .forEach((cell) => cell.addEventListener("click", cellClick));

// Function to handle the click event
function cellClick(clickedSpaceEvent) {
    //saves the clicked element for later use
    let clickedSpace = clickedSpaceEvent.target;
    //   console.log(clickedSpace);
    let cellIndex = parseInt(clickedSpace.getAttribute("id"));
    //   console.log(cellIndex);
    game.update(cellIndex);
}
let displayOutput = document.querySelector(".display_info");
let winMessage = (currentPlayer) =>
    `Player ${currentPlayer.getPiece()} has won!`;
let catsGameMessage = () => `Cat's Game!`;
let currentPlayerTurn = (currentPlayer) =>
    `It's ${currentPlayer.getPiece()}'s turn.`;
