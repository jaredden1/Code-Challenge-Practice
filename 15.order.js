// Write a function that takes a name array and returns the names in alphabetical order.

let nameArr = ["zayanh", "james", "aaron", "scott"];

const alphaOrder = () => {
  return nameArr.map(array => array.split("").sort().join(""));
};
console.log(alphaOrder());

// test passed