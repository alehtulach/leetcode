/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = (candidates, target) => {
  candidates = candidates.sort((a, b) => a - b);

  let res = [];
  const backtrack = (i, nums, total) => {
    if (target === total) {
      res.push([...nums]);
      return;
    }

    if (total > target || i >= candidates.length) return;

    backtrack(i + 1, [...nums, candidates[i]], total + candidates[i]);

    let count = 1;
    while (candidates[i] === candidates[i + count]) count += 1;
    backtrack(i + count, [...nums], total);
  };

  backtrack(0, [], 0);

  return res;
};

combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
