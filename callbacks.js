
function doWork(callbackFunction){

    // do some work

    callbackFunction(); // callback

}

doWork(function() {
    console.log('Doing Work');
});

// alternatively
var f = function(){
    console.log('More Work');
};

doWork(f);
