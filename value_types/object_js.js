let person = {
    name: 'Andrii',
    age: 30
};

person.name = 'NewName';

person['name'] = 'NewNewName';

console.log(person.name);


let createPerson1 = (name, age) => {
    return {
        name: name,
        age: age
    };
}

// simplified construction
let createPerson2 = (name, age) => ({name, age})

console.log(createPerson1('Ivan', 15))
console.log(createPerson2('Ivan', 15))

class Car {
    constructor(carName) {
        this.carName = carName;
    }
}

newCar = new Car('BMW');
newCar2 = new Car('Audi');
console.log(newCar.carName);
console.log(newCar2.carName);

class CarWithGetterAndSetter {
    constructor(carName) {
        this._carName = carName;
    }

    //getter
    get carName() {
        console.log('getter start');
        return this._carName;
    }

    //setter
    set carName(carName) {
        console.log('setter start');
        this._carName = carName;
    }
}

console.log('CarWithGetterAndSetter');
newCar = new CarWithGetterAndSetter();
newCar.carName = 'Ferrari';
console.log(newCar.carName);