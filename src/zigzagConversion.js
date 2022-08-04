/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows === 1) return s;

  const totalRows = Math.min(numRows, s.length);
  let currRow = -1;
  let goingUp = true;
  const res = [];
  for (let i = 0; i < s.length; i++) {
    if (currRow === totalRows - 1 || (currRow === 0 && i > 1)) {
      goingUp = !goingUp;
    }
    if (goingUp) {
      currRow++;
    } else {
      currRow--;
    }
    res[currRow] = [...(res[currRow] || []), s[i]];
  }

  return res.flat().join("");
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("AGH", 2));
