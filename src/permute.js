/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  const calc = (nums) => {
    if (nums.length === 1) {
      return [...nums];
    }

    let res = [];
    for (let i = 0; i < nums.length; i++) {
      let copy = [...nums];
      copy.splice(i, 1);
      let data = calc(copy);
      for (let j = 0; j < data.length; j++) {
        let item = data[j];
        res.push(Array.isArray(item) ? [...item, nums[i]] : [item, nums[i]]);
      }
    }

    return res;
  };

  let res = calc(nums);
  if (res.length === 1) {
    return [[...res]];
  }
  return res;
};

permute([1, 2, 3]);
