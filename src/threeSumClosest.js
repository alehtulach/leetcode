/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
  nums = nums.sort((a, b) => a - b);

  let closestSum = 100000;
  for (let firstIdx = 0; firstIdx < nums.length; firstIdx++) {
    let secondIdx = firstIdx + 1;
    let thirdIdx = nums.length - 1;
    while (secondIdx < thirdIdx) {
      let sum = nums[firstIdx] + nums[secondIdx] + nums[thirdIdx];
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum;
      }
      if (sum > target) {
        thirdIdx--;
      } else {
        secondIdx++;
      }
    }
  }
  return closestSum;
};
