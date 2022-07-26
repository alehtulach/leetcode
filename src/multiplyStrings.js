const multiply = (num1, num2) => {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }

  let arrNum1 = [...num1];
  let arrNum2 = [...num2];

  arrNum1 = arrNum1.reverse();
  arrNum2 = arrNum2.reverse();

  const results = [];
  for (let i = 0; i < arrNum2.length; i++) {
    let carry = 0;
    const currentResult = [];
    for (let k = 0; k < i; k++) {
      currentResult.push(0);
    }
    for (let j = 0; j < arrNum1.length; j++) {
      const multiplication = Number(arrNum2[i]) * Number(arrNum1[j]) + carry;
      const lastDigit = multiplication % 10;
      currentResult.push(lastDigit);
      carry = (multiplication / 10) ^ 0;
    }
    if (carry) {
      currentResult.push(carry);
    }
    results.push(currentResult);
  }

  return summarize(results);
};

const summarize = (results) => {
  const sumRes = [];
  let maxLength = 0;
  for (let i = 0; i < results.length; i++) {
    maxLength = results[i].length > maxLength ? results[i].length : maxLength;
  }
  let carry = 0;
  let result = 0;
  for (let i = 0; i < maxLength; i++) {
    let currSum = 0;
    for (let j = 0; j < results.length; j++) {
      currSum = currSum + (results[j][i] || 0);
    }
    currSum = currSum + carry;
    result = currSum % 10;
    carry = (currSum / 10) ^ 0;
    sumRes.push(result);
  }
  if (carry > 0) {
    sumRes.push(carry);
  }

  return sumRes.reverse().join("");
};

console.log(multiply("140", "721"));
