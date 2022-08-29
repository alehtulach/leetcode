/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
  let jump = 0;
  let stepsIdx = [0, 0];

  while (stepsIdx[1] < nums.length - 1) {
    let newRight = 0;
    for (let i = stepsIdx[0]; i <= stepsIdx[1]; i++)
      newRight = Math.max(i + nums[i], newRight);

    stepsIdx[0] = stepsIdx[1] + 1;
    stepsIdx[1] = newRight;

    jump += 1;
  }

  return jump;
};

jump([2, 3, 1, 1, 4]);
