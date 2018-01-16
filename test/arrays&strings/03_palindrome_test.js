var chai = require('chai');
let assert = chai.assert
let expect = chai.expect
let should = chai.should()
let palindrome = require('../../problems/arrays&strings/03_palindrome.js').palindrome
let str

describe('palindrome', function() {
  
  xit('returns a boolean', function() {
    str = "goo"
    expect(typeof(palindrome(str)) == 'boolean').equal(true)
  })
  
  
})