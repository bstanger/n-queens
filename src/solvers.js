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
  // var solution;
  // var maxIndex = n - 1;
  // // Come up with all possible coordinate pairs [0,0][0,1]...[3,3] - 16

  var possibleCols = []; // [0, 1, 2, 3]
  console.log('n: ', n);
  for (var j = 0; j < n; j++) {
    possibleCols.push(j);
  }

  // for every n spots, make combo
  // aiming for: [[0,1],[0,2],[2,3],[3,1]]
  // remove possible row and column as go

  var possibleValues = [0, 1];
  var nItemCombo = [];
  // Loop for each final coordinate
  for (var i = 0; i < n; i++) {
    var rowCombo = [];
    
    while (rowCombo.length < n) {
      for (var k = 0; k < possibleValues.length; k++) { // possibleValues[k] = 0 or 1
        if (possibleValues[k] === 1) {
          rowCombo.push(possibleValues[k]); // [1]
          while (rowCombo.length < n) {
              rowCombo.push(0); // rowCombo = [1,0,0,0]
          }
        } else 
        // [0] or [1]
      }
    }


    for (var k = 0; k < possibleValues.length; k++) { // possibleValues[k] = 0 or 1
      for (var m = 0; m < possibleCols.length; m++) { // possibleCols[m] = 0, 1, 2, 3
        rowCombo.push(possibleValues[k])

      //   coordinatePair.push(possibleRows[k], possibleCols[m]);
      //   possibleRows.splice(k, 1); // [0, 1, 2]
      //   possibleCols.splice(m, 1); // [1, 2, 3]
      //   nItemCombo.push(coordinatePair);
        // nItemCombo == [[0,1]]
      }
    }
    // nItemCombo = [[0,1,0,0],[0,0,0,1],[0,0,1,0],[1,0,0,0]]
  }
  
  debugger;

  // remove duplicates
  // {0:1,0:2,[2,3],[3,1]} and {[0,1],[0,2],[3,1],[2,3]}

  // run tests to check for conflicts
  

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

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
