/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    maxArea = Math.max(
      maxArea,
      Math.min(height[left], height[right]) * (right - left)
    );
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);