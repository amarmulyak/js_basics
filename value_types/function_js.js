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