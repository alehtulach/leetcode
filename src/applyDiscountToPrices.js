const discountPrices = (sentence, discount) =>
  sentence
    .split(" ")
    .map((row) =>
      row.replace(/^\$(\d+)$/g, (_, group) => {
        const discountedPrice = (group - (group * discount) / 100).toFixed(2);
        return `$${discountedPrice}`;
      })
    )
    .join(" ");

console.log(
  discountPrices("$2$3 $10 $100 $1 200 $33 33$ $$ $99 $99999 $9999999999", 0)
);
console.log(discountPrices("ka3caz4837h6ada4 r1 $602", 9));
console.log(discountPrices("there are $1 $2 and 5$ candies in the shop", 50));
