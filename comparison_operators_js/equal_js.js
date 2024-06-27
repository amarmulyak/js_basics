let a = 30;

isEqual0 = a == 30; //true
isEqual1 = a == '30';  // true (check value)
isEqual2 = a === '30'; // false (check value and data type)

isNotEqual0 = a !== 30; //false
isNotEqual1 = a !== '30'; //true
isNotEqual2 = a != 30; //false
isNotEqual3 = a != '30'; //false

console.log(isEqual0);
console.log(isEqual1);
console.log(isEqual2);
console.log('isNotEqual0 ' + isNotEqual0);
console.log('isNotEqual1 ' + isNotEqual1);
console.log('isNotEqual2 ' + isNotEqual2);
console.log('isNotEqual3 ' + isNotEqual3);