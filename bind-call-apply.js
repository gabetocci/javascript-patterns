// bind, call, apply: functions of all function objects
var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function(){
        
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
        
    }
}

var logName = function(lang1, lang2){
    
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('------------');
}

//logName(); // error: this.getFullName is undefined

// make a copy of function logname and set 'this' to refernce to bind argument for this functions execution context
var logPersonName = logName.bind(person);// this.getFullName becomes person.getFullName

logPersonName(); // ok!

// alternative syntax, we could bind the function on the fly
var logname2 = function(lang1, lang2){
    
    console.log('Logged: ' + this.getFullName());
    
}.bind(person);

logname2();

// call executes a function and adds a first parameter for 'this' to reference
// call does not make a copy of the function
logName.call(person, 'en', 'es');

// apply does the same thing as call, but wants the arguments as an array
logName.apply(person, ['en', 'es']);

// anonymous function example
(function(lang1, lang2){
    
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('------------');
    
}).apply(person, ['fr','gr']);

// function borrowing (use the function of an object)
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

// use the getFullName function of person to get fullname of person2 using apply/this reference
var p2fullname = person.getFullName.apply(person2);
console.log('Person 2 FullName: ' + p2fullname);

// function currying: setting preset arguments in bind copy of function
function multiply (a,b){
    return a*b;
}

// 2 is always the first parameter
var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(3));























