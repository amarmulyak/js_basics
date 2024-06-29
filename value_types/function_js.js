let age = 5;
age++;
age--;
remainder = Math.floor(age / 2);

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName + '!');
    console.log(`Hello ${name} ${lastName}!`);
    console.log(`Age is ${age}`);
    console.log(`Age is ${remainder}`);
    a = 1 // without let a will be global variable

}

greet('John', 'Smith');

function check_type(variable) {
    if (typeof variable == 'number') {
        console.log(`${variable} is a number`)
    } else {
        console.log(`${variable} is NOT a number`)
    }
}

check_type(a)

var arrow_function = (a, b) => a + b;
console.log(arrow_function('Hello ', 'World!'));

var arrow_function = a => a *= a;
console.log(arrow_function(5));


const sum = (function () {
    return function(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})()

console.log('res ' + sum(10, 20, 30));


let myObj = {one: 1, two: 2, three: 3};
let {one: par_one} = myObj;
console.log(par_one);

let myObj2 = {
    one: {min: 10, max: 20}, two: 2, three: 3
};
let {one: {min: par_one_min}} = myObj2;
console.log(par_one_min);


let stats = {
    min: 100,
    max: 200,
    other: 5,
    whatever: 10
};

let myrRes = function({min, max}) {
    return [min, max];
}

console.log(myrRes(stats));