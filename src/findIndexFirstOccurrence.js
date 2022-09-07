/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (needle === "") return 0;

  const lps = [0];
  let prevLps = 0;
  let i = 1;
  while (i < needle.length) {
    if (needle[i] === needle[prevLps]) {
      lps[i] = prevLps + 1;
      prevLps += 1;
      i += 1;
    } else {
      if (prevLps === 0) {
        lps[i] = 0;
        i += 1;
      } else {
        prevLps = lps[prevLps - 1];
      }
    }
  }

  i = 0;
  let j = 0;
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i += 1;
      j += 1;
    } else {
      if (j === 0) {
        i += 1;
      } else {
        j = lps[j - 1];
      }
    }
    if (j === needle.length) {
      return i - needle.length;
    }
  }
  return -1;
};

strStr("sadbutsad", "sad");
