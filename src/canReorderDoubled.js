/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canReorderDoubled = function (arr) {
  const positiveNums = new Map(),
    negativeNums = new Map(),
    zeroNums = new Map();
  let count = 0;

  arr.forEach((item) => {
    const map = item === 0 ? zeroNums : item > 0 ? positiveNums : negativeNums;
    map.set(item, 1 + (map.get(item) ?? 0));
  });
  const negativeKeys = [...negativeNums.keys()].sort((a, b) => a - b);
  const positiveKeys = [...positiveNums.keys()].sort((a, b) => a - b);

  const numsProc = (nums, key) => {
    while (nums.get(key) && nums.get(key * 2)) {
      nums.set(key, nums.get(key) - 1);
      nums.set(key * 2, nums.get(key * 2) - 1);
      count++;
    }
  };

  for (let i = negativeKeys.length - 1; i >= 0; i--) {
    const key = negativeKeys[i];
    numsProc(negativeNums, key);
  }

  for (let i = 0; i < positiveKeys.length; i++) {
    const key = positiveKeys[i];
    numsProc(positiveNums, key);
  }
  if (zeroNums.get(0)) {
    count = count + ((zeroNums.get(0) / 2) ^ 0);
  }

  if (count === arr.length / 2) {
    return true;
  }
  return false;
};

canReorderDoubled([2, 1, 2, 1, 1, 1, 2, 2]);
canReorderDoubled([2, 4, 0, 0, 8, 1]);
canReorderDoubled([4, -2, 2, -4]);
canReorderDoubled([3, 1, 3, 6]);
