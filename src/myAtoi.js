/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = (s) => {
  let length = s.length;
  let i = 0;
  let res = 0;
  let sign = 1;
  let MAX_INT = Math.pow(2, 31) - 1;
  let MIN_INT = -Math.pow(2, 31);

  while (i < length && s.charAt(i) === " ") i += 1;

  if (i < length && s.charAt(i) === "-") {
    i += 1;
    sign = -1;
  } else if (i < length && s.charAt(i) === "+") i += 1;

  let numbers = "0123456789";
  while (i < length && numbers.includes(s.charAt(i))) {
    if (
      res > Math.trunc(MAX_INT / 10) ||
      (res === Math.trunc(MAX_INT / 10) && s.charAt(i) > 7)
    ) {
      if (sign === 1) return MAX_INT;
      else return MIN_INT;
    }
    res = res * 10 + Number(s.charAt(i));
    i += 1;
  }

  return res * sign;
};

console.log(myAtoi("    -2147483659"));
