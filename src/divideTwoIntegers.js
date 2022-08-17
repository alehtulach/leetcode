/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divideTwoIntegers = (dividend, divisor) => {
  if (dividend === 0) return 0;

  const MAX_INT = Math.pow(2, 31) - 1;
  const MIN_INT = -Math.pow(2, 31);

  let d = Math.abs(dividend);
  let dv = Math.abs(divisor);
  let output = 0;

  while (d >= dv) {
    let temp = dv;
    let mul = 1;
    while (d >= temp) {
      d -= temp;
      output += mul;
      mul += mul;
      temp += temp;
    }
  }

  if (Math.sign(dividend * Math.sign(divisor)) < 0) output = -output;

  return Math.min(MAX_INT, Math.max(MIN_INT, output));
};

divideTwoIntegers(-2147483648, -1);
