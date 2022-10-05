/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = (nums) => {
  nums = nums.sort((a, b) => a - b);
  let res = [];
  let backtrack = (i, arr) => {
    if (i === nums.length) return res.push(arr);

    backtrack(i + 1, [...arr, nums[i]]);
    while (nums[i] === nums[i + 1]) i += 1;
    backtrack(i + 1, [...arr]);
  };

  backtrack(0, []);
  return res;
};

subsetsWithDup([1, 2, 2, 3]);
