/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
  let output = [];
  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      output.push(newInterval);
      return [...output, ...intervals.slice(i)];
    } else if (newInterval[0] > intervals[i][1]) {
      output.push(intervals[i]);
    } else {
      newInterval = [
        Math.min(newInterval[0], intervals[i][0]),
        Math.max(newInterval[1], intervals[i][1]),
      ];
    }
  }

  output.push(newInterval);
  return output;
};

insert([[7, 8]], [1, 5]);
