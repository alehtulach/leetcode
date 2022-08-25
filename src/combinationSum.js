/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const res = [];

  const backtrack = (i, vals, total) => {
    if (total === target) {
      res.push([...vals]);
      return;
    }
    if (i >= candidates.length || total > target) return;

    backtrack(i, [...vals, candidates[i]], total + candidates[i]);

    backtrack(i + 1, [...vals], total);
  };

  backtrack(0, [], 0);

  return res;
};

combinationSum([2, 7, 6, 3, 5, 1], 9);
