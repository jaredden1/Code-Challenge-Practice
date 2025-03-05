// Write a function that sorts an array and another for a string.

// Array
const sortArray = () => {
  let letterArray = ["c", "a", "b", "d"];
  return letterArray.sort();
};
console.log(sortArray());

// String
const sortString = () => {
  let letterString = "d a b c";
  return letterString.split("").sort().join("");
};
console.log(sortString());

// test passed 