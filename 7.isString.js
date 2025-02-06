// Use if/else to determine whether a statement is a string.

// Custom true/false message 
const isStringMessage = (value) => {
  if (typeof value === "string") {
    return "TRUE, this is a string!";
  } else {
    return "this is NOT a string!";
  }
}; 

// test cases:
console.log(isStringMessage("Is this a string?"));
console.log(isStringMessage("What about this?"));
console.log(isStringMessage(1, 2, 3, 4, 5));

// True/false return
const isString = (value) => {
  if (typeof value === "string") {
    return true;
  } else {
    return false;
  }
}; 

// test cases:
console.log(isString("Is this a string?"));
console.log(isString("What about this?"));
console.log(isString(1, 2, 3, 4, 5));