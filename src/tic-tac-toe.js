class TicTacToe {
    constructor() {
      this.board=[ ['*', '*', '*'],
                   ['*', '*', '*'],
                   ['*', '*', '*']];
      this.current = true;     //true=x, false=o, x first
    }

    getCurrentPlayerSymbol() {
      return this.current?'x':'o';
    }

    nextTurn(rowIndex, colIndex) {
      if ((rowIndex>=0)&&(rowIndex<=2)&&(colIndex>=0)&&(colIndex<=2)&&
      (this.board[rowIndex][colIndex] == '*')&&(!this.getWinner())) {
        this.board[rowIndex][colIndex]=this.current?'x':'o';
        this.current = (!this.current);
      }
      return this;
    }

    isFinished() {
      //true if game is finished (e.g. there is a winner or it is a draw)
      return this.noMoreTurns()||this.getWinner();
    }

    getWinner() {
      // return winner symbol (x or o) or null if there is no winner yet

      //check diagonal
      if (this.board[1][1] != '*') {
        if ((this.board[0][0] == this.board[1][1] ) &&
            (this.board[1][1] == this.board[2][2])) return this.board[1][1];
        if ((this.board[2][0] == this.board[1][1]) &&
            (this.board[1][1] == this.board[0][2])) return this.board[1][1];
      }

      //check vertical/hrisontal
      for (var i = 0; i < 3; i++) {
        var vX = 0,
            vO = 0,
            hX = 0,
            hO = 0;
        for (var j =0; j < 3; j++) {
          if (this.board[i][j] == 'x') vX++;
          if (this.board[i][j] == 'o') vO++;
          if (this.board[j][i] == 'x') hX++;
          if (this.board[j][i] == 'o') hO++;
        }
        if ((vX == 3)||(hX == 3)) return 'x';
        if ((vO == 3)||(hO == 3)) return 'o';
      }

      return null;
    }

    noMoreTurns() {
      return !(this.board.toString().indexOf('*') > -1);
    }

    isDraw() {
      //should return true if there is no more turns and no winner
      return this.noMoreTurns()&&(!this.getWinner());
    }

    getFieldValue(rowIndex, colIndex) {
      if ((rowIndex>=0)&&(rowIndex<=2)&&(colIndex>=0)&&(colIndex<=2))
        return (this.board[rowIndex][colIndex] == '*')?null:this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
