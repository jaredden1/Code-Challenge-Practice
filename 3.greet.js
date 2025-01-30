// Using string concatenation:
const greetConcat = (name) => {
  return "Hello " + name;
};
console.log(greetConcat("James"));

// Using template literals:
const greetTemp = name => {
   return `Hello ${name}` 
};
console.log(greetTemp("James"));