let a = 30;
isEqual0 = a == 30; //true
isEqual1 = a == '30';  // true (check value)
isEqual2 = a === '30'; // false (check value and data type)

console.log(isEqual0);
console.log(isEqual1);
console.log(isEqual2);
