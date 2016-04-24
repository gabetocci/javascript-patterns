var empty = [];

// array can be mixed types including objects/functions
var arr = [
    45,
    true,
    'some string',
    {
        name: 'Gabe',
        age: 33,
        address: '121 Main St'
    },
    function(name){
        console.log('Hello ' + name);
    }
];

console.log(arr);
arr[4](arr[3].name);

//
// do not use for in, use standard for loop
// arrays are objects that store values as properties
// libraries can add properties to prototype
Array.prototype.myCustomFeature = 'Lookout!';

var arr = ['Gabe','Jeff','Amy'];

for (var i = 0; i < arr.length; i++){
    console.log(i + ':' + arr[i]);
};

console.log('-------------')

for (var p in arr){
    console.log(p + ':' + arr[p]);
};
