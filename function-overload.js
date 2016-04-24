function greet(firstname, language) {

    language = language || 'en';

    if (language === 'en'){
        console.log('Hello ' + firstname);
    }

    if (language === 'es'){
        console.log('Hola ' + firstname);
    }
}

function greetEnglish(firstname){
    greet(firstname, 'en')
};
function greetSpanish(firstname) {
    greet(firstname, 'es')
};

greetEnglish('John');
greetSpanish('John');
