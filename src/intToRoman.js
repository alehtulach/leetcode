/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
  const romans = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  let romanKeys = Object.keys(romans).map((el) => Number(el));
  let strNum = String(num);
  let res = "";
  let length = strNum.length;
  let i = 0;

  while (i < length) {
    let currNum = Number(strNum.charAt(i));

    let j = 0;
    while (++j < length - i) currNum *= 10;

    let tempRoman = "";
    while (currNum !== 0) {
      let step = -1;
      if (romans[currNum]) {
        step = currNum;
      } else {
        for (let k = 0; k <= romanKeys.length - 1; k += 2) {
          if (
            romanKeys[k] < currNum &&
            (romanKeys[k + 1]
              ? currNum < romanKeys[k + 1]
              : romanKeys[k + 1] === undefined)
          ) {
            step = romanKeys[k];
            break;
          }
        }
      }
      while (currNum - step >= 0) {
        currNum -= step;
        tempRoman += romans[step];
      }
    }
    res += tempRoman;
    i += 1;
  }

  return res;
};

intToRoman(58);
