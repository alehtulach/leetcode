/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = (obstacleGrid) => {
  let row = new Array(obstacleGrid[0].length).fill(0);
  let newRow = [];
  for (let i = 0; i < obstacleGrid[0].length; i++) {
    if (obstacleGrid[0][i] === 1) {
      row[i] = 0;
      row.fill(0, i + 1, obstacleGrid[0].length);
      break;
    } else {
      row[i] = 1;
    }
  }
  for (let i = 1; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[i].length; j++) {
      if (j === 0 && obstacleGrid[i][j] !== 1) {
        newRow[j] = row[j];
      } else if (j !== 0 && obstacleGrid[i][j] !== 1) {
        newRow[j] = newRow[j - 1] + row[j];
      } else {
        newRow[j] = 0;
      }
    }
    row = newRow;
  }
  return row[row.length - 1];
};

uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]);
