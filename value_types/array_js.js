let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors.push('yellow')

console.log(selectedColors);
console.log(typeof selectedColors);

// copy of array
let copyOfArray = [...selectedColors]
console.log(copyOfArray);
console.log(typeof copyOfArray);

// copy of array without first two elements
let [, , ...copyOfArray2] = selectedColors
console.log(copyOfArray2);

//get some values from array
let myArray = [1, 2, 3, 4, 5];
let [first, second, , fourth] = myArray;
console.log(first, second, fourth);
