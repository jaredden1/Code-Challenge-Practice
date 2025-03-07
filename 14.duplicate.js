// Write a function that removes the duplicate letters.

let lettersArr = ["a", "b", "a", "c", "c", "d", "e", "d", "f"];

const removeDuplicate = () => {
  let newLettersArr = [...new Set(lettersArr)];
  return newLettersArr.sort();
};

console.log(removeDuplicate());

// test passed
