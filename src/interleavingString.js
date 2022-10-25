/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
const isInterleave1 = (s1, s2, s3) => {
  const dp = {};
  if (s1.length + s2.length != s3.length) return false;
  const dfs = (i, j) => {
    if (i === s1.length && j === s2.length) {
      return true;
    }
    if (dp[`'${i}${j}'`] === false) {
      return false;
    }
    if (i < s1.length && s1[i] === s3[i + j] && dfs(i + 1, j)) {
      return true;
    }
    if (j < s2.length && s2[j] === s3[i + j] && dfs(i, j + 1)) {
      return true;
    }
    dp[`'${i}${j}'`] = false;
    return false;
  };

  let res = dfs(0, 0);
  return res;
};

isInterleave1(
  "bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa",
  "babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab",
  "babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab"
);

const isInterleave = (s1, s2, s3) => {
  if (s1.length + s2.length != s3.length) return false;
  let fields = Array.from(Array(s1.length + 1), () =>
    Array(s2.length + 1).fill(false)
  );
  fields[s1.length][s2.length] = true;
  for (let i = fields.length - 1; i >= 0; i--) {
    for (let j = fields[i].length - 1; j >= 0; j--) {
      if (i < s1.length && s1[i] === s3[i + j] && fields[i + 1][j]) {
        fields[i][j] = true;
      }
      if (j < s2.length && s2[j] === s3[i + j] && fields[i][j + 1]) {
        fields[i][j] = true;
      }
    }
  }
  return fields[0][0];
};

isInterleave("aabcc", "dbbca", "aadbbcbcac");
