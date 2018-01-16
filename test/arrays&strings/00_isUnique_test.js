var chai = require('chai');
let assert = chai.assert
let expect = chai.expect
let should = chai.should()
let URLify = require('../../problems/arrays&strings/URLify.js').URLify
let string;

describe('URLify', function() {
  
  it('is a function', function() {
    expect(typeof URLify === 'function').equal(true)
  })
  
  it('returns a bool', function() {
    string = "goo"
    expect(typeof(URLify(string)) == 'string').equal(true)
  })
  
  xit('returns false when string does not contain unique characters', function() {
    string = "goo"
    expect(URLify(string)).equal(false)
  })
  
  xit('returns true when string contains only unique characters', function() {
    string = "abcd"
    expect(URLify(string)).equal(true)
  })
  
  xit('ignores spaces', function() {
    string = "you have it"
    expect(URLify(string)).equal(true)
  })
  
})