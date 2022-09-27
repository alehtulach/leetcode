/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates1 = (nums) => {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i < nums.length - 2 && nums[i] === nums[i + 2]) {
      continue;
    }
    nums[k] = nums[i];
    k += 1;
  }

  return k;
};

const removeDuplicates = (nums) => {
  if (nums === null) {
    return 0;
  }

  if (nums.length <= 2) {
    return nums.length;
  }
  let i = 1; // point to previous
  let j = 2; // point to current

  while (j < nums.length) {
    if (nums[j] !== nums[i - 1]) {
      i++;
      nums[i] = nums[j];
    }
    j++;
  }

  return i + 1;
};

removeDuplicates([1, 1, 1, 2, 2, 3]);
