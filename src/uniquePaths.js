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

const uniquePaths1 = (m, n) => {
  let cache = Array.from(Array(m), () => []);
  const climb = (y, x) => {
    let res1 = 0;
    let res2 = 0;
    if (y === m - 1 && x === n - 1) return 1;
    if (y < m - 1) {
      if (cache[y + 1][x]) {
        res1 = cache[y + 1][x];
      } else {
        res1 = climb(y + 1, x);
        cache[y + 1][x] = res1;
      }
    }
    if (x < n - 1) {
      if (cache[y][x + 1]) {
        res2 = cache[y][x + 1];
      } else {
        res2 = climb(y, x + 1);
        cache[y][x + 1] = res2;
      }
    }
    return res1 + res2;
  };

  return climb(0, 0);
};

uniquePaths1(3, 7);
