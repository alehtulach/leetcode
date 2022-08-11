/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  let parenthesis = ["(", ")"];
  let res = [];

  const generate = (i, currStr, open, close) => {
    if (currStr.length === n * 2) {
      res.push(currStr);
      return;
    }
    for (let c of parenthesis) {
      if (c === "(" && open < n) {
        generate(i + 1, currStr + c, open + 1, close);
      }
      if (c === ")" && close < open) {
        generate(i + 1, currStr + c, open, close + 1);
      }
    }
  };

  generate(0, "", 0, 0);

  return res;
};

console.log(generateParenthesis(3));
