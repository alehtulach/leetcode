const romans = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

let inputRomans = "MCMXCIV";

let res = inputRomans.split("").reduce((res, roman, index, splitted) => {
  if (index === 0) {
    return romans[roman];
  }
  const curr = romans[roman];
  const pre = romans[splitted[index - 1]];
  if (curr <= pre) {
    return res + curr;
  } else {
    return res - pre * 2 + curr;
  }
}, 0);

console.log(res);