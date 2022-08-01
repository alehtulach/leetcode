/**
 * @param {number[]} nums
 * @return {number}
 */
const minPairSum = (nums) => {
  nums = nums.sort((a, b) => a - b);

  let maxPair = 0;
  const numsLength = nums.length;
  const iterations = nums.length / 2;
  for (let i = 0; i < iterations; i++) {
    let sum = nums[i] + nums[numsLength - i - 1];
    maxPair = sum > maxPair ? sum : maxPair;
  }
  return maxPair;
};

minPairSum([3, 5, 4, 2, 4, 6]);
minPairSum([3, 2, 4, 1, 1, 5, 1, 3, 5, 1]);
