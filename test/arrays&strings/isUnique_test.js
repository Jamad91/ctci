var chai = require('chai');
let assert = chai.assert
let expect = chai.expect
let should = chai.should()
let isUnique = require('../../problems/arrays&strings/isUnique.js').isUnique
let string;

describe('isUnique', function() {
  
  it('is a function', function() {
    expect(typeof isUnique === 'function').equal(true)
  })
  
  it('returns a bool', function() {
    string = "goo"
    expect(typeof(isUnique(string)) == 'boolean').equal(true)
  })
  
  it('returns false when string does not contain unique characters', function() {
    string = "goo"
    expect(isUnique(string)).equal(false)
  })
  
  it('returns true when string contains only unique characters', function() {
    string = "abcd"
    expect(isUnique(string)).equal(true)
  })
  
})