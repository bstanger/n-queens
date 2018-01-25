/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


// assume n = 4
window.findNRooksSolution = function(n) {
  var solution;
  var board = new Board({n: n});
  
  // start blank board
  // vars: data of board, possible cols [0, 1, n-1]

  var makeRow = function(rowsToGo, board) {
    
    if (rowsToGo === 0) {
      solution = board.rows();
      return;
    }

    var rowIdx = n - rowsToGo;
    
    for (var i = 0; i < n; i++) {
      board.togglePiece(rowIdx, i);
      if (board.hasAnyRooksConflicts()) { // if has conflicts
        board.togglePiece(rowIdx, i);
      } else {
        makeRow(--rowsToGo, board);
      }      
    }
  
  }
  // recursive fn (rowsToGo, board)
    
    // if no rounds left, return with board
  
    // otherwise, try each possible cols
      // for col, toggle piece
      // check for conflicts
      // if conflict, toggle piece back and finish, for loop returns to try next
      // else no conflict, call recursive fn with --rounds, currentBoard
    
  // recurse(n rounds, board)
  makeRow(n, board);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// nItemCombo = [[0,1,0,0],[0,0,0,1],[0,0,1,0],[1,0,0,0]]

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
