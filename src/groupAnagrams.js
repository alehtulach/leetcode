/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  let map = new Map();
  let res = [];

  for (let str of strs) {
    let count = new Array(26).fill(0);

    for (let c of str) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    let countStr = count.join(",");
    if (map.has(countStr)) {
      map.get(countStr).push(str);
    } else {
      map.set(countStr, [str]);
    }
  }

  map.forEach((val) => {
    res.push(val);
  });
  return res;
};

groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]);
