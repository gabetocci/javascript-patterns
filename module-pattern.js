(function(global,$){

    // create library object and execute constructor
    var Greetr = function(firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language);
    }

    // private properties
    var supportedLanguages = ['en', 'es'];

    // build empty prototype
    Greetr.prototype = {};

    // constructor
    Greetr.init = function(firstName, lastName, language){

        var self = this;
        self.firstName = firstName || 'Default';
        self.lastName  = lastName  || 'Default';
        self.language  = language  || 'en';

    }

    // assign prototype
    Greetr.init.prototype = Greetr.prototype;

    // expose Greetr and G$
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));