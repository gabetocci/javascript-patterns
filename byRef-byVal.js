// by value (primitive types)
var a = 3;
var b;
b = a;
console.log(a);
console.log(b);

// by reference (objects & functions & parameters)
var c = { greeting: 'Hey Yo!'};
var d;
d = c;
c.greeting = 'Sup?'; // mutate object in memory via reference c
console.log(c);
console.log(d); // reference to mutated object

function changeGreeting(obj) {
    obj.greeting = 'Whaddup?';
}
changeGreeting(c); // mutate object
console.log(c);
console.log(d);

// equal operator creates New object in memory
d = { greeting: 'Yoyoyoyo'};
console.log(c);
console.log(d);
