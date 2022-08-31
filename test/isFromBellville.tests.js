describe ("The isFromBellville", function() {

    it ("it should returns true if a registration number is for Bellville otherwise returns false. Registration numbers for Bellville starts with CY", function() {
    
        assert.equal(isFromBellville('CY 123'), true);
    });

    it ("it should returns returns true if a registration number is for Bellville otherwise returns false. Registration numbers for Bellville starts with CY", function() {
    
        assert.equal(isFromBellville('CJ 123'), false);
    });

});
