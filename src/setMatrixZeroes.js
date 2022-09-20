/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
  let rowFirst = 1;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        if (i === 0) {
          rowFirst = 0;
        } else {
          matrix[i][0] = 0;
          matrix[0][j] = 0;
        }
      }
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (matrix[0][0] === 0) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
  if (rowFirst === 0) {
    matrix[0].fill(0);
  }
};

setZeroes([
  [-4, -2147483648, 6, -7, 0],
  [-8, 6, -8, -6, 0],
  [2147483647, 2, -9, -6, -10],
]);
