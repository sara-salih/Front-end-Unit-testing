describe ("The isFromGauteng", function() {

    it ("it should  returns true if a registration number is for Gauteng, otherwise returns false.", function() {
    
        assert.equal(isFromGauteng('DR 45 LR GP'), true); 
    });

    it ("it should  returns true if a registration number is for Gauteng, otherwise returns false.", function() {
    
        assert.equal(isFromGauteng('CJ 123 908'), false);
    });

});
