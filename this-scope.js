// global execution context
console.log(this);

// function statement
function a(){
    console.log(this); //still global
    this.newVariable = 'NewVariable';
}

// function expression
var b = function(){
    console.log(this); // still global
}
a();
console.log(newVariable); // global variables 'this' is assumed - no need to reference this.newVaribale
b();

// this not global when scope is method of object
var c = {
    name: 'the c object',
    log: function() {
        this.name = 'mutated name',
            console.log(this);

        // bug in language: internal function references global this although inside object
        var setname = function(newName){
            this.name = newName; // global this!
        }
        setname('NEW NAME');
        console.log(this);
    }
}
c.log();

// pattern to fix bug (also 'let' can be used)
var d = {
    name: 'the d object',
    log: function() {
        var self = this; // fix (sometimes 'that' used)
        self.name = 'mutated name',
            console.log(self);

        var setname = function(newName){
            self.name = newName; // update self
        }
        setname('NEW NAME');
        console.log(self);
    }
}
d.log();