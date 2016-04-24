
function map(arr, f){

    var retArr = []; // always good to return something new, rather than mutate values
    for (var i=0; i < arr.length; i++){
        retArr.push(
            f(arr[i])
        );
    };
    return retArr;
}

var arr1 = [1,2,3,4,5];
console.log(arr1);

console.log(
    map(arr1, function(item){
        return item * 2;
    })
);

console.log(
    map(arr1, function(item){
        return item > 4;
    })
);

// use currying to set limiter argument
var testLimit = function(limiter, item){
    return item > limiter;
};
console.log(testLimit);

console.log(
    map(arr1, testLimit.bind(this, 2))
);

// if you will never need to mutate 'this', bind
var testLimit2 = function(limiter){
    return testLimit.bind(this, limiter);
};

console.log(
    map(arr1, testLimit2(4))
);

// simplify/combine functions
var testLimit3 = function(limiter){
    return function(limiter, item){
        return item > limiter;
    }.bind(this, limiter);
};

console.log(
    map(arr1, testLimit3(3))
);

