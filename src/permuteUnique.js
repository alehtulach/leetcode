/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums) => {
  nums = nums.sort((a, b) => a - b);

  const calc = (nums) => {
    if (nums.length === 1) return nums;

    let res = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) continue;
      let copy = [...nums];
      copy.splice(i, 1);
      let data = calc(copy);
      for (let j = 0; j < data.length; j++)
        res.push(
          Array.isArray(data[j]) ? [...data[j], nums[i]] : [data[j], nums[i]]
        );
    }

    return res;
  };

  let res = calc(nums);
  if (res.length === 1 && !Array.isArray(res[0])) {
    return [[...res]];
  }
  return res;
};

permuteUnique([1, 1]);
