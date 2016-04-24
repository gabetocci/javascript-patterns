
var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

var jane = {
    firstname: 'Jane'
}

// demo only: do not manually assign proto - use _.extend
john.__proto__ = person;
console.log(john.getFullName());

jane.__proto__ = person;
console.log(jane.getFullName());

// everything is an object
var a = {};
var b = [];
var c = function(){};

console.log(a);
console.log(a.__proto__);

console.log(b);
console.log(b.__proto__);

console.log(c);
console.log(c.__proto__);

// reflection: view object properties
for (var prop in john){
    console.log(prop + ' ' + john[prop]);
    if (!john.hasOwnProperty(prop)){
        console.log(prop + ': not on object (is inherited)');
    }
}

// extend (part of underscore library)
//_.extend(jane, john); // would add all properties of john to jane

//
// save memory space by accessing functions by reference in prototypes

// create Person constructor
// cannot return anything because it return the new object
// capitalize first character as convention so you can notice missing 'new'
function Person(firstname, lastname) {
    this.firstname = firstname,
        this.lastname = lastname
}

// add object methods to prototype
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

// using 'New' constructor enables .prototype reference
var john = new Person ('John', 'Doe');
var jane = new Person ('Jane', 'Doe');

// access reference to getFullName() via prototype inheritance
console.log(john.getFullName());
console.log(jane.getFullName());

//
// extend primitive
String.prototype.isLengthGreaterThan = function(limit){
    return this.length > limit;
}

// 'Gabe' is converted to String by javascript engine
console.log('Gabe'.isLengthGreaterThan(3));

Number.prototype.isPositive = function (){
    return this > 0;
}
// javascript engine does not convert numbers unless new used
//console.log(2.isPositive());

var a = new Number(2);
console.log(a.isPositive());

// do not do this with primitives!
// use primitive values for primitive types
// otherwise you will have issues with comparisons ===
var g = new String('Gabe');
console.log('Gabe' == g); // true; coerced values are equal
console.log('Gabe' === g); // false; literal not equal to object

//
// pure prototypal inheritance
// polyfill for legacy browsers that do not implement Object.create
if (!Object.create){
    Object.create = function(objProto){
        if(arguments.length > 1){
            throw new Error('Object.create only accepts 1 parameter');
        }
        function F() {}; // creates new empty object with constructor
        F.prototype = objProto; // set prototype to parameter
        return new F(); // construct and return object
    }
}

// create object to be inherited (base object)
var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

// create new object of base type
var john = Object.create(person);
john.firstname = "John"; // overwrite any property

console.log(
    john.getFullName()
);

//
// typeof & instanceof
var x = 3;
console.log(typeof x);

var y = function() {};
console.log(typeof y);

console.log(typeof null); // bug in language

function Person(name){
    this.name = name;
};

var z = new Person('gabe');
console.log(z instanceof Person);