/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = (n) => {
  let res = Array.from(Array(n), () => []);
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;
  let count = 1;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res[top][i] = count++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      res[i][right] = count++;
    }
    right--;

    for (let i = right; i >= left; i--) {
      res[bottom][i] = count++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      res[i][left] = count++;
    }
    left++;
  }
  return res;
};

generateMatrix(3);
