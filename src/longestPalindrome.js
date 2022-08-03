/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let palindromeArr = [...s.charAt(0)];
  const isPalindrome = (chars) => {
    let palindrome = false;
    let iterNum = (chars.length / 2) ^ 0;
    for (let i = 0; i < iterNum; i++) {
      if (chars[i] === chars[chars.length - i - 1]) {
        palindrome = true;
      } else {
        palindrome = false;
        break;
      }
    }
    return palindrome;
  };

  for (let i = 0; i < s.length; i++) {
    let str = [];
    for (let j = i; j < s.length; j++) {
      str.push(s.charAt(j));
      if (isPalindrome(str)) {
        palindromeArr =
          str.length > palindromeArr.length ? [...str] : [...palindromeArr];
      }
    }
  }
  return palindromeArr.join("");
};

console.log(longestPalindrome("abcba"));
