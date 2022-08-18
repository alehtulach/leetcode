/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = (nums) => {
  const swap = (first, second) => {
    let temp = nums[first];
    nums[first] = nums[second];
    nums[second] = temp;
  };

  let reverseIdx = 0;
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      let iter = 1;
      let add = -1;
      let rightSection = nums.slice(i);
      while (add === -1) {
        for (let j = 0; j <= rightSection.length - 1; j++) {
          if (rightSection[j] === nums[i - 1] + iter) {
            add = j;
          }
        }
        iter += 1;
      }
      swap(i + add, i - 1);
      reverseIdx = i;
      break;
    }
  }
  for (let i = reverseIdx, j = nums.length - 1; i < j; i++, j--) {
    swap(i, j);
  }
};

nextPermutation([2, 3, 1, 3, 3]);
