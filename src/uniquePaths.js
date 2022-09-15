/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  let row = [];
  let newRow = [];
  for (let i = 0; i < n; i++) {
    row[i] = 1;
  }
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (j === n - 1) {
        newRow[j] = 1;
      } else {
        newRow[j] = newRow[j + 1] + row[j];
      }
    }
    row = newRow;
  }
  return row[0];
};

uniquePaths(3, 7);
