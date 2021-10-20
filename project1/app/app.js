//the cell ids for the tic tac toe start in the top left corner and cycle though from 0-8 i.e. 
// 0 | 1 | 2 
// ----------
// 3 | 4 | 5
// ----------
// 6 | 7 | 8

//establish the gameboard class which will hold the the main funcationalities of the game
class GameBoard {
  // contructor fot he gameboard will hold the game state which will hold the positions of specific tokens for a win
  constructor(state = ["", "", "", "", "", "", "", "", ""]) {
    this.state = state;
  }

  //the marck cell function will mark a cell with the proper token passing the specific cells id and the specific toke
  markCell(cellid, token) {
    // test to see if the current cell is not empty
    if (!this.isEmpty(cellid)) {
      //if the cell is not empty dont do anything 
      return false;
    } else {
      // if the cell is empty fill the current cell id with the current token
      this.state[cellid] = token;
      this.updateGameboard(cellid);
      return true;
    }
  }

  //this fucntion will chenge the token perm of the cell id
  updateGameboard(cellid) {
    let token = this.state[cellid];
    document.getElementById(cellid).innerHTML = token;
  }

  //this function resets the game board
  resetGameboard() {
    for (let i = 0; i < this.state.length; i++) {
      this.updateGameboard(i);
    }
  }
  // thisfunction checks if a cell is empty
  isEmpty(cellid) {
    return this.state[cellid] == "";
  }

  // this function checks if the GameBoard is completly filled filled
  isFilled() {
    for (let i = 0; i < this.state.length; i++) {
      if (this.isEmpty(i)) {
        return false;
      }
    }
    return true;
  }
  // return 0 if no win, continue play
  // return 1 if win conditions are met
  // return 2 if tie game.
  checkWin() {
    if (
      //if gameboard state postion 0, postion 1, and psotion 2 are all the same
      this.state[0] == this.state[1] &&
      this.state[1] == this.state[2] &&
      //and they are not empty
      !this.isEmpty(0)
    ) { //then its a win return one
      return 1;
      //else if, cycle trhough other win conditions the same way
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

//establish toke class for the current letter of the current player
class Gametoken {
  constructor(token) {
    this.token = token;
  }
  //funtion to retruve the token of the current payer
  gettoken() {
    return this.token;
  }
}

//establish the game class to test whether or not the game is sill being played, and deliver win messages if not
class Game {
  constructor() { }
  // calls markCell passing the current players token and cellid
  update(cellid) {
    //if the game is not over then update the cell id and gat the current players token
    if (!this.gameOver) {
      let updated = this.boardState.markCell(
        cellid,
        this.currentPlayer.gettoken()
      );
      //if the cell id is updated then we need to check if its a win
      if (updated) {
        let winCondition = this.boardState.checkWin();
        // return 0 if no win, continue play
        // return 1 if win conditions are met
        // return 2 if tie game.
        if (winCondition == 0) {
          this.switchPlayer();
          displayOutput.innerHTML = currentPlayerTurn(this.currentPlayer);
        } else if (winCondition == 1) {
          displayOutput.innerHTML = winMessage(this.currentPlayer);
          this.gameOver = true;
        } else {
          displayOutput.innerHTML = tieGameMessage();
          this.gameOver = true;
        }
      }
    }
  }


  //you also have to be able to swith the current player this is that function
  switchPlayer() {
    if (this.currentPlayer == this.X) {
      this.currentPlayer = this.O;
    } else {
      this.currentPlayer = this.X;
    }
  }

  // We need a function to start the game and gather the current states of the gameboard as well as the current tokens
  startGame() {
    this.gameOver = false;
    // create the two players
    this.X = new Gametoken("X");
    this.O = new Gametoken("O");

    // create the GameBoard
    this.boardState = new GameBoard();
    this.boardState.resetGameboard();
    // set current player
    this.currentPlayer = this.X;

    displayOutput.innerHTML = currentPlayerTurn(this.currentPlayer);
  }
}

//call new game 
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

//variabble meeages to display
let displayOutput = document.querySelector(".gameInfo");
let winMessage = (currentPlayer) =>
  `Congradulations! Player ${currentPlayer.gettoken()} has won!`;
let tieGameMessage = () => `It's a Tie!`;
let currentPlayerTurn = (currentPlayer) =>
  `It's ${currentPlayer.gettoken()}'s turn.`;
