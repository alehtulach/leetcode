/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = (s) => {
  let res = [];
  if (s.length > 12) return res;

  const backtrack = (i, dots, cur) => {
    if (dots === 4 && i === s.length) {
      res.push(cur.substring(0, cur.length - 1));
      return;
    }
    if (dots > 4) {
      return;
    }

    for (let j = 1; j <= 3; j++) {
      let num = s.substring(i, i + j);

      if (num.length === 1 || (num[0] !== "0" && parseInt(num) <= 255)) {
        backtrack(i + j, dots + 1, `${cur}${num}.`);
      }
    }
  };

  backtrack(0, 0, "");

  return res;
};

restoreIpAddresses("25525511135");
