//
// ES6 class is syntactic sugar for prototypal inheritance
class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet(){
        return 'Hi '+ firstname;
    }
}

var john = new Person('John', ' Doe');

//
// Class inheritance ( extends sets the prototype )
class InformalPerson extends Person {
    constructor(firstname, lastname) {
        super(firstname, lastname); // references Person constructor
    }

    greet(){ // override base function greet()
        return 'Yo ' + firstname;
    }
}

var johnny = new InformalPerson('Johnny', 'Doe');
