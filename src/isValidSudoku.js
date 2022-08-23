/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  let col = [];
  let box = new Map();
  for (let i = 0; i < 9; i++) {
    let row = new Set();
    for (let j = 0; j < 9; j++) {
      let elm = board[i][j];
      if (String(elm) === ".") continue;

      if (!col[j]) {
        col[j] = new Set();
      }

      let x = Math.trunc(i / 3);
      let y = Math.trunc(j / 3);
      if (!box.has(`${x}${y}`)) {
        box.set(`${x}${y}`, new Set());
      }

      if (row.has(elm) || col[j].has(elm) || box.get(`${x}${y}`).has(elm))
        return false;
      row.add(elm);
      col[j].add(elm);
      box.get(`${x}${y}`).add(elm);
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    [".", ".", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "3", ".", ".", ".", ".", ".", "1"],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["1", ".", ".", ".", ".", ".", "3", ".", "."],
    [".", ".", ".", ".", "2", ".", "6", ".", "."],
    [".", "9", ".", ".", ".", ".", ".", "7", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["8", ".", ".", "8", ".", ".", ".", ".", "."],
  ])
);
