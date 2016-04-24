// object literal syntax
var gabe = {
    firstname: 'Gabe',
    lastname: 'Tocci',
    address: {
        street: '121 Main St.',
        city: 'Johnson City',
        state: 'TN'
    }
};

// add properties to object on the fly
gabe.dob = {
    year: 1982,
    month: 10,
    day: 22
}

// JSON requires quotes around property names
console.log(JSON.stringify(gabe));
console.log(JSON.parse('{"firstname": "Bubba", "lastname": "Gump", "age": 44, "deceased": false}'));


