/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  nums = nums.sort((a, b) => a - b);

  let num2Idx = 0;
  let num3Idx = nums.length - 1;
  let result = [];

  for (let num1Idx = 0; num1Idx < nums.length; num1Idx++) {
    if (num1Idx > 0 && nums[num1Idx] === nums[num1Idx - 1]) {
      continue;
    }
    num2Idx = num1Idx + 1;
    num3Idx = nums.length - 1;
    while (num2Idx < num3Idx) {
      let sum = nums[num1Idx] + nums[num2Idx] + nums[num3Idx];
      if (sum === 0) {
        result.push([nums[num1Idx], nums[num2Idx], nums[num3Idx]]);
        num3Idx--;
        while (num2Idx < num3Idx && nums[num3Idx] === nums[num3Idx + 1])
          num3Idx--;
      } else if (sum > 0) {
        num3Idx--;
      } else {
        num2Idx++;
      }
    }
  }
  return result;
};

console.log(threeSum([0, 0, 0]));
