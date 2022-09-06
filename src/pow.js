/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  const calc = (x, n) => {
    if (n === 0) return 1;
    if (x === 0) return 0;

    let res;

    res = calc(x, Math.trunc(n / 2));
    res *= res;
    if (n % 2) {
      res *= x;
    }
    return res;
  };

  let res = calc(x, Math.abs(n));
  if (n < 0) {
    return 1 / res;
  }
  return res;
};

myPow(2.1, 3);
