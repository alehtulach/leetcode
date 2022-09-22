/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let l = 0;
  let r = nums.length - 1;
  let i = 0;
  let temp;
  while (i <= r) {
    temp = nums[i];
    if (nums[i] === 2) {
      nums[i] = nums[r];
      nums[r] = temp;
      r -= 1;
    } else {
      if (nums[i] === 0) {
        nums[i] = nums[l];
        nums[l] = temp;
        l += 1;
      }
      i += 1;
    }
  }
};

sortColors([2, 1, 2]);
