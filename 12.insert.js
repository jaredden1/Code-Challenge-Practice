// Write a function that can insert new name into an array.

nameArray = [];

const insertArray = (newName) => {
  nameArray.push(newName);
  return nameArray;
};

// test cases
insertArray("Jim");
insertArray("Jimmy");
insertArray("James");

// Console array
console.log(nameArray);


// Write a function that can insert new name into an array at a chosen position.

const insertPosition = (newName, position) => {
  nameArray.splice(position, 0, newName);
  return nameArray;
};

// test case
insertPosition("Joe", 2);

// Console array
console.log(nameArray);
