/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
  let res = [];
  const gen = (i, cur) => {
    if (k === cur.length) {
      res.push(cur);
      return;
    }
    for (i; i < n; i++) {
      if (cur.length + n - i >= k) {
        gen(i + 1, [...cur, i + 1]);
      }
    }
  };

  gen(0, []);
  return res;
};

combine(5, 3);
