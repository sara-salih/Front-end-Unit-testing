describe ("The isFromCapeTown", function() {

    it ("it should  returns true if a registration number is for Cape Town otherwise returns false", function() {
    
        assert.equal(isFromCapeTown('CA 123 908'), true);
    });

    it ("it should returns true if a registration number is for Cape Town otherwise returns false", function() {
    
        assert.equal(isFromCapeTown('CJ 123 908'), false);
    });

});
