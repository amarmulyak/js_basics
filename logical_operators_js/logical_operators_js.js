let isSalaryDay = true;
let isYourBirthDay = true;

if (isSalaryDay === true && isYourBirthDay === true) {
    console.log('todayIsYourDay')
} //true

if (isSalaryDay === true || isYourBirthDay === true) {
    console.log('todayIsYourDay')
}// true

if (!(isSalaryDay === false && isYourBirthDay === false)) {
    console.log('todayIsYourDay')
}// true
