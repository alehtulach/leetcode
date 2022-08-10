/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
  nums = nums.sort((a, b) => a - b);

  const kSum = (start, k, target) => {
    let res = [];

    const twoSum = () => {
      const res = [];
      let lo = start;
      let hi = nums.length - 1;
      while (lo < hi) {
        let sum = nums[lo] + nums[hi];
        if (sum < target || (lo > start && nums[lo] === nums[lo - 1])) {
          ++lo;
        } else if (
          sum > target ||
          (hi < nums.length - 1 && nums[hi] === nums[hi + 1])
        ) {
          --hi;
        } else {
          res.push([nums[lo++], nums[hi--]]);
        }
      }
      return res;
    };

    let smallest = nums[start];
    let largest = nums[nums.length - 1];
    let average = target / k;
    if (start === nums.length || smallest > average || largest < average) {
      return res;
    }

    if (k === 2) return twoSum();

    for (let i = start; i < nums.length - 1; i++) {
      if (i === start || nums[i - 1] !== nums[i]) {
        for (let subset of kSum(i + 1, k - 1, target - nums[i])) {
          res.push([nums[i], ...subset]);
        }
      }
    }

    return res;
  };

  return kSum(0, 4, target);
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
