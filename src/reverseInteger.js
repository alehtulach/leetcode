/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  // Convert to a string -> reverse -> convert back to an int -> set sign (+/-)
  const n = parseInt(x.toString().split("").reverse().join("")) * Math.sign(x);
  // Return n if it's within range, otherwise 0
  return n > -Math.pow(2, 31) && n < Math.pow(2, 31) - 1 ? n : 0;
};

reverse(-123);
