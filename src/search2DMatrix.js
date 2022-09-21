/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  let first = matrix[0][0];
  let last = matrix[matrix.length - 1][matrix[matrix.length - 1].length - 1];

  if (target < first || target > last) return false;

  let l = 0;
  let r = matrix.length - 1;
  let m;
  while (l <= r) {
    m = Math.trunc((l + r) / 2);
    if (
      target >= matrix[m][0] &&
      target <= matrix[m][matrix[matrix.length - 1].length - 1]
    ) {
      break;
    } else if (target < matrix[m][0]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  if (l > r) return false;

  let array = matrix[m];
  l = 0;
  r = array.length - 1;
  while (l <= r) {
    m = Math.trunc((l + r) / 2);
    if (target === array[m]) {
      return true;
    } else if (target < array[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return false;
};

searchMatrix([[1], [3]], 2);
