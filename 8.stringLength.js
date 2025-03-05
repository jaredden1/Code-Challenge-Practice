// Write a function that returns the length of the string inputted without counting the spaces
const stringLength = (string) => {
  return string.split(" ").join("").length;
};

// Test cases
console.log(stringLength("Hello"));
console.log(stringLength("How are you doing?"));
console.log(stringLength("Fine"));


// Use Regular Expressions (RegEx) now (/\s/g, "") use with .replace()
const stringLength1 = (string) => {
  return string.replace(/\s/g, "").length;
};

// Test cases
console.log(stringLength1("Try this"));
console.log(stringLength1("It works better then split/join!"));

// test passed 