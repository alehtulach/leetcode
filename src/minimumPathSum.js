/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid) => {
  let row = [];
  let newRow = [];
  for (let i = grid[grid.length - 1].length; i >= 0; i--) {
    if (i === grid[grid.length - 1].length - 1) {
      row[i] = 0;
    } else {
      row[i] = Number.POSITIVE_INFINITY;
    }
  }
  for (let i = grid.length - 1; i >= 0; i--) {
    for (let j = grid[i].length; j >= 0; j--) {
      if (j === grid[i].length) {
        newRow[j] = Number.POSITIVE_INFINITY;
      } else {
        newRow[j] = grid[i][j] + Math.min(row[j], newRow[j + 1]);
      }
    }
    row = newRow;
  }
  return row[0];
};

minPathSum([
  [1, 2, 3],
  [4, 5, 6],
]);
