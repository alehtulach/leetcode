/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
  let res = [];

  const backtrack = (i, sub) => {
    if (i === nums.length) {
      res.push(sub);
      return;
    }

    backtrack(i + 1, [...sub, nums[i]]);
    backtrack(i + 1, [...sub]);
  };

  backtrack(0, []);

  return res;
};

subsets([1, 2, 3]);
