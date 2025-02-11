// Write a function that sorts an array and another for a string.

// String
const sortArray = () => {
  let letterArray = ["c", "a", "b", "d"];
  return letterArray.sort();
};
console.log(sortArray());

// Array
const sortString = () => {
  let letterString = "d a b c";
  return letterString.split("").sort().join("");
};
console.log(sortString());
