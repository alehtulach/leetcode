/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let pointer = 0;
  let prefix = 0;
  let max = nums[0];
  while (pointer < nums.length) {
    prefix += nums[pointer];
    max = Math.max(max, prefix);
    if (prefix < 0) {
      prefix = 0;
    }
    pointer += 1;
  }
  return max;
};

maxSubArray([5, 4, -1, 7, 8]);
