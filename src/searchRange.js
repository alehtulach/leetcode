/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  const search = (left, right, move) => {
    let found = -1;
    while (left <= right) {
      let mid = Math.trunc((left + right) / 2);

      if (target < nums[mid]) {
        right = mid - 1;
      } else if (target > nums[mid]) {
        left = mid + 1;
      } else {
        found = mid;
        if (move === 1) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
    return found;
  };

  return [search(left, right, -1), search(left, right, 1)];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
