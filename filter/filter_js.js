let myList = [1, -2, 3.4, 4, -5.6, 6]
let filteredList1 = myList.filter(el => el > 0);
let filteredList2 = myList.filter(el => Number.isInteger(el) && el > 0);

console.log(filteredList1);
console.log(filteredList2);