/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let maxLength = 0;
  let externalBreak = false;
  for (let i = 0; i < s.length; i++) {
    let chars = new Set();
    for (let j = i; j < s.length; j++) {
      if (j === s.length - 1) {
        externalBreak = true;
      }
      if (!chars.has(s.charAt(j))) {
        chars.add(s.charAt(j));
      } else {
        break;
      }
    }
    maxLength = chars.size > maxLength ? chars.size : maxLength;
    if (externalBreak) {
      break;
    }
  }

  return maxLength;
};

const lengthOfLongestSubstring1 = (s) => {
  let res = 0;

  const checkRepetitions = (start, end) => {
    let chars = new Set();
    for (let i = start; i < end; i++) {
      let c = s.charAt(i);
      if (chars.has(c)) {
        return false;
      }
      chars.add(c);
    }
    return true;
  };

  const len = s.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      if (checkRepetitions(i, j)) {
        res = Math.max(res, j - i);
      }
    }
  }
  return res;
};

lengthOfLongestSubstring(" ");
lengthOfLongestSubstring("dvdf");
lengthOfLongestSubstring("abcabcbb");
