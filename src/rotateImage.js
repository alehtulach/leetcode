/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
  let l = 0;
  let r = matrix[0].length - 1;
  let t = 0;
  let b = matrix.length - 1;

  while (l < r) {
    for (let i = 0; i < r - l; i++) {
      let temp = matrix[t][l + i];
      matrix[t][l + i] = matrix[b - i][l];
      matrix[b - i][l] = matrix[b][r - i];
      matrix[b][r - i] = matrix[t + i][r];
      matrix[t + i][r] = temp;
    }
    l += 1;
    r -= 1;
    t += 1;
    b -= 1;
  }
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
