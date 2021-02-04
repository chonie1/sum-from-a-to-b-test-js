function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN > toN) {
    return 0;
  } else if (fromN === toN) {
    return fromN;
  }

  return fromN + toN + sum(fromN + 1, toN - 1);
}

console.log(sum(0,1));
console.log(sum(1,2));
console.log(sum(3,7));

module.exports = sum;
