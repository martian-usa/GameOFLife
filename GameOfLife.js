class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  /**
   * Returns a 2D Array
   */

  makeBoard() {
    let x = new Array(this.height)
    for (let i = 0; i < this.height; i++) {
      x[i] = new Array(this.width).fill(0);
    }
    return x;
    // TODO: Create and return an 2D Array 
    // with `this.heigh` as rows and `this.width` as cols.
    // For example, given a height of 4 and a width of 3, it will generate:
    // [
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    // ]
  }


  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.
    let neighbor = 0;
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        neighbor += this.board[i][j];
      }
    }
    neighbor -= this.board[row][col];
    return neighbor;
  }


  /**
   * Given the present board, apply the rules to generate a new board
   */
  
  tick() {
    const newBoard = this.makeBoard();

    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board 
    // (the next iteration of the game) 
    //
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if(this.board[i][j] === 0 && this.livingNeighbors(i,j) === 3) {
          newBoard[i][j] = 1;
        } else if (this.board[i][j] === 1 && (this.livingNeighbors(i,j) < 2 || this.livingNeighbors(i,j) > 3)) {
          newBoard[i][j] = 0; 
        } else {
          this.board[i][j] = newBoard[i][j];
        }
      }
    }
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors
    this.board = newBoard;
  }
}
