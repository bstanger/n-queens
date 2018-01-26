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
  
  };
  makeRow(n, board);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// nItemCombo = [[0,1,0,0],[0,0,0,1],[0,0,1,0],[1,0,0,0]]

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  // create board

  // recursive fn (rowsLeft, board)
    // var columnsLeft

    // if 0 rowsLeft, increment ct
    
    // for each column left...
      // toggle
      // if board has conflicts
        // toggle back
      // if no board conflict
        // remove index from columnsLeft
        // recurse with rows left 0, exit out
        // toggle back
        // recurse with same row as current row, same board

  var board = new Board({n: n});

  var makeRow = function(rowsToGo, board, columnsLeft) {
    if (!columnsLeft) {
      columnsLeft = [];
      for (var m = 0; m < n; m++) {
        columnsLeft.push(m);
      }
    }
    
    if (rowsToGo === 0) {
      solutionCount++;
      var continueLoop = true;
      if(board.hasMinorDiagonalConflictAt(n - 1)){
        return false;
      } else {
        return true;
      }
    }

    var rowIdx = n - rowsToGo;
    
    for (var i = 0; i < columnsLeft.length; i++) {
      board.togglePiece(rowIdx, columnsLeft[i]);

      if (board.hasAnyRooksConflicts()) { // if has conflicts
        board.togglePiece(rowIdx, columnsLeft[i]);

      } else {
        var usedIdx = columnsLeft[i];
        var idxOfUsedCol = columnsLeft.indexOf(columnsLeft[i]);
        columnsLeft.splice(idxOfUsedCol, 1);

        if (makeRow(rowsToGo - 1, board)) {
          board.togglePiece(rowIdx, usedIdx);
          makeRow(rowsToGo, board, columnsLeft);
        } else {
          return;
        }
      }      
    }
  };

  makeRow(n, board);        
      
  // run recursion()
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
