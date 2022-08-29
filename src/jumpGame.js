/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
  if (nums.length === 1 && nums[0] === 0) return true;
  let reach = false;

  let left = 0;
  let right = 0;
  while (!reach && right >= left) {
    let newRight = 0;
    for (let i = left; i <= right; i++) {
      newRight = Math.max(newRight, i + nums[i]);
    }
    left = right + 1;
    right = newRight;

    if (right >= nums.length - 1) reach = true;
  }

  return reach;
};

canJump([3, 2, 1, 0, 4]);
