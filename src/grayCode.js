/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = (n) => {
  let gen = (n) => {
    if (n === 0) return ["0"];
    if (n === 1) return ["0", "1"];
    let res = gen(n - 1);
    let temp = [];
    for (let i = 0; i < res.length; i++) {
      temp.push(`0${res[i]}`);
    }
    for (let i = res.length - 1; i >= 0; i--) {
      temp.push(`1${res[i]}`);
    }
    return temp;
  };

  return gen(n).map((val) => parseInt(val, 2));
};

grayCode(3);
