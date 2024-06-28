const NUMBER = 22
let num;

try {
    NUMBER = 11;
} catch(ex) {
    console.log(ex);
    num = 22;
}

console.log(num);
