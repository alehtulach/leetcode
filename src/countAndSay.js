/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
  let nums = "1";
  let count = 1;

  while (count < n) {
    let tempStr = "";
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
        tempStr = `${tempStr.substring(0, tempStr.length - 2)}${
          Number(tempStr[tempStr.length - 2]) + 1
        }${tempStr.substring(tempStr.length - 1)}`;
      } else {
        tempStr += `1${nums[i]}`;
      }
    }
    nums = tempStr;
    count += 1;
  }
  return nums;
};

countAndSay(30);
