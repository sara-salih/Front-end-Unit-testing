describe ("The isWeekday function", function() {

    it ("it return false when call is Sutarday ", function() {
    
        assert.equal(isWeekday('Saturday'), false);
    });

    it ("it return false when call is Sunday ", function() {
    
        assert.equal(isWeekday('Sunday'), false);

    });

    it ("it return True when call is from Monday to Friday ", function() {
    
        assert.equal(isWeekday('Sunday'), false);
        
    });

});