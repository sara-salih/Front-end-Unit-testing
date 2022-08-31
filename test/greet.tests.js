// import assert from "assert";
// import greet from "../greet.js";

describe ("The greet function", function() {

    it ("should be able to greet Sara", function() {
    
        assert.equal("Hello, Sara", greet("Sara"));
    });

    it ("should be able to greaet Salih", function() {
    
        assert.equal("Hello, Salih", greet("Salih"));
    });

});
