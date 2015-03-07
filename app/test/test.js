var assert = require("assert");

describe('Array', function(){
  describe('indexOf() not found', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });

  describe('indexOf() second element', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(1, [1,2,3].indexOf(2));
    });
  });
});