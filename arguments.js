function greet(firstname, lastname, language) {

    language = language || 'EN';

    if (arguments.length === 0) {
        console.log('Missing Parameters!');
        console.log('-------');
        return;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log(arguments[1]);
    console.log('--------');
}

greet();
greet('John');
greet('John','Doe','IT');


// spread example
/*
 function greet(firstname, ...otherArgs){
 console.log(...otherArgs);
 }
 greet('John', '121 Main St', 23, true);
 */