// after the execution context of outer funtion is popped off the stack
// its variables are still availible to inner functions. They are "closed" in.

function greet(whattosay){
    return function(name){
        console.log(whattosay + ' ' + name);
    }
}
var sayHi = greet('Hi');
sayHi('Gabe'); // whattosay is availible to sayHi via closure, even though greet() is gone


// common closure example
function buildFunctions(){

    var arr = [];

    for (var i = 0; i < 3; i++){
        // this code is being added to array - not invoked here
        arr.push(function(){
            console.log(i);
        });
    }
    return arr;
}
var f = buildFunctions();

// buildFunctions complete and popped off stack

f[0](); // f goes up scope stack/execution context and finds i in buildFunctions closure === 3
f[1]();
f[2]();

function buildFunctions2(){

    var arr = [];

    for (var i = 0; i < 3; i++){

        arr.push(

            // iife so they have their own context - return a function value of i when invoked
            (function(j){
                return function(){
                    console.log(j);
                }
            }(i))

        );
    }
    return arr;
}
var f2 = buildFunctions2();

// buildFunctions complete and popped off stack

f2[0](); // f2 goes up scope stack/execution context and executes returned functions were already invoked with i
f2[1]();
f2[2]();


// factory utilizing closure of language argument
function makeGreeting(language){

    return function(firstname){

        if (language === 'en'){
            console.log('Hello ' + firstname)
        }
        if (language === 'es'){
            console.log('Hola ' + firstname)
        }
    }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('Gabe');
greetSpanish('Gabe');
