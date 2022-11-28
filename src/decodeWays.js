/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = (s) => {
  let cache = { [s.length]: 1 };
  const backtrack = (i) => {
    if (cache[i]) {
      return cache[i];
    }
    if (s[i] === "0") return 0;

    let res = backtrack(i + 1);

    let substr = parseInt(s.substring(i, i + 2));
    if (substr >= 10 && substr <= 26) {
      res += backtrack(i + 2);
    }
    cache[i] = res;
    return res;
  };

  let res = backtrack(0);
  return res;
};

const numDecodings1 = (s) => {
  let cache = { [s.length]: 1 };
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "0") {
      cache[i] = 0;
    } else {
      cache[i] = cache[i + 1];
    }
    let substr = parseInt(s.substring(i, i + 2));
    if (substr >= 10 && substr <= 26) {
      cache[i] += cache[i + 2];
    }
  }
  return cache[0];
};

numDecodings1("227");
