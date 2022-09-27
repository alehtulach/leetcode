/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  const dfs = (idx, i, j) => {
    if (idx === word.length) return true;

    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[i].length ||
      board[i][j].toString() != word.charAt(idx)
    ) {
      return false;
    }

    let temp = board[i][j];
    board[i][j] = "";

    let found =
      dfs(idx + 1, i, j - 1) ||
      dfs(idx + 1, i + 1, j) ||
      dfs(idx + 1, i, j + 1) ||
      dfs(idx + 1, i - 1, j);
    board[i][j] = temp;
    return found;
  };
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (dfs(0, i, j)) {
        return true;
      }
    }
  }
  return false;
};

exist(
  [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  "ABCCED"
);
