/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
  let l = 0;
  let r = matrix[0].length;
  let t = 0;
  let b = matrix.length;
  let direction = 0;
  let x = 0;
  let y = 0;
  let output = [];

  while (l !== r && t !== b) {
    output.push(matrix[y][x]);
    if (direction === 0) {
      if (x === r - 1) {
        t += 1;
        direction = 1;
        y += 1;
      } else {
        x += 1;
      }
    } else if (direction === 1) {
      if (y === b - 1) {
        r -= 1;
        direction = 2;
        x -= 1;
      } else {
        y += 1;
      }
    } else if (direction === 2) {
      if (x === l) {
        b -= 1;
        direction = 3;
        y -= 1;
      } else {
        x -= 1;
      }
    } else {
      if (y === t) {
        l += 1;
        direction = 0;
        x += 1;
      } else {
        y -= 1;
      }
    }
  }

  return output;
};

spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
