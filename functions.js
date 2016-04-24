// function statement
function greet(person){
    console.log('Hello ' + person.firstname);
}
greet(gabe);

// build object in function call
greet({
    firstname: 'Rachael',
    lastname: 'Tocci'
});

// function expression
var greet = function(name){
    console.log('Hello ' + name);
}
greet('Gabe');

// functions are objects, so you can add properties to them
greet.language = 'english';
console.log(greet);
console.log(greet.language);

// execute anonymous function
function doSomething(a){
    a();
}
doSomething(function(){
    console.log("doing something");
});

// better example
function doSomethingNTimes(n,f){
    for (var i = 1; i <= n; i++) {
        f();
    }
}
doSomethingNTimes(10,function(){
    console.log("doing something 2");
});

// immediately invoked function expression (iife)
var greet = function(name){
    console.log('Hello ' + name);
}();

// anonymous iife. wrap in parenthesis to trick syntax parser
(function(firstname){
    console.log('Hello ' + firstname);
// }('Gabe'));
})('Gabe'); // invocation can be inside or oustide parenthesis

// iife's have their own execution context, so they are not in the global context
// to access global context, pass a reference to it as argument:
(function(global, firstname){
    console.log('Hello ' + firstname);
    global.document.getElementById('someElement');
})(window, 'Gabe');
