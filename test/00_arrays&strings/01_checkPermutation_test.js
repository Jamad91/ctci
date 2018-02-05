var chai = require('chai');
let assert = chai.assert
let expect = chai.expect
let should = chai.should()
let checkPermutation = require('../../problems/arrays&strings/01_checkPermutation.js').checkPermutation
let str1;
let stri2;

describe('checkPermutation', function() {

  it('returns a bool', function() {
    str1 = "abc"
    str2 = "abc"
    expect(typeof(checkPermutation(str1, str2)) == 'boolean').equal(true)
  })
  
  it('returns true when strings are the same', function() {
    str1 = "abc"
    str2 = "abc"
    expect(checkPermutation(str1, str2)).equal(true)
  })
  
  it('returns false when strings are not the same', function() {
    str1 = "abc"
    str2 = "abd"
    expect(checkPermutation(str1, str2)).equal(false)
  })
  
  it('works with longer strings', function() {
    str1 = "I am the night. I am Vengence. I am Batman!"
    str2 = str1.split('').reverse().join('')
    expect(checkPermutation(str1, str2)).equal(true)
  })
  
})