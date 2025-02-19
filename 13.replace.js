// Write a function that allows you to replace a word in a string.

let text = "Hi there NAME, how are you?";

const replaceWord = (oldWord, newWord) => {
  return text.replace(oldWord, newWord);
};

console.log(replaceWord("NAME", "James"));
