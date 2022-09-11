/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  if (intervals.length === 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  let output = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    if (output[output.length - 1][1] >= intervals[i][0]) {
      output[output.length - 1][1] = Math.max(
        output[output.length - 1][1],
        intervals[i][1]
      );
    } else {
      output.push(intervals[i]);
    }
  }
  return output;
};

merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);
