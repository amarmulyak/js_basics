let person = {
    name: 'Andrii',
    age: 30
};

person.name = 'NewName';

person['name'] = 'NewNewName';

console.log(person.name);
