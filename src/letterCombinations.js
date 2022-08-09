/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  const digit2Letters = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let res = [];

  const backtrack = (i, curStr) => {
    if (curStr.length === digits.length) {
      res.push(curStr);
      return;
    }
    for (let c of digit2Letters[Number(digits.charAt(i))]) {
      backtrack(i + 1, curStr + c);
    }
  };

  if (digits !== "") {
    backtrack(0, "");
  }

  return res;
};

console.log(letterCombinations("23"));
