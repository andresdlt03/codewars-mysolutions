function isSolved(board) {
  let finished = true;
  for(let i = 0; i < 3; i++) { // horizontal win
    if(board[i].indexOf(0) !== -1) finished = false;
    if(allEqual(board[i]) && board[i][0] !== 0) return board[i][0];
  }
  for(let i = 0; i < 3; i++) { // vertical win
    let arrcol = [board[0][i],board[1][i],board[2][i]];
    if(allEqual(arrcol) && arrcol[0] !== 0) return arrcol[0];
  }
  let arrdiag = [board[0][0],board[1][1],board[2][2]] // diag win 1st case
  if(allEqual(arrdiag) && arrdiag[0] !== 0) return arrdiag[0];
  arrdiag = [board[0][2],board[1][1],board[2][0]] // diag win 2nd case
  if(allEqual(arrdiag) && arrdiag[0] !== 0) return arrdiag[0];

  if(finished) return 0;
  return -1;
}

const allEqual = arr => arr.every(v => v === arr[0]);