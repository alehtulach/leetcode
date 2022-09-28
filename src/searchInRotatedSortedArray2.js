/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.trunc((left + right) / 2);
    if (nums[mid] === target) return true;

    if (nums[left] < nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[left] > nums[mid]) {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      left++;
    }
  }

  return false;
};

search([1, 0, 1, 1, 1], 0);
