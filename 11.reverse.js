// Write a function that reverses a string or an array.

// String
const reverseString = () => {
  let string = "James";
  return string.split("").reverse().join("");
};
console.log(reverseString());

// Array
const reverseArray = () => {
  let arrayName = ["James", "Aaron"];
  return arrayName.reverse();
};
console.log(reverseArray());

// test passed 