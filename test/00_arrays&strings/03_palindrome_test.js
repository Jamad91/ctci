var chai = require('chai');
let assert = chai.assert
let expect = chai.expect
let should = chai.should()
let palindrome = require('../../problems/00_arrays&strings/03_palindrome.js').palindrome
let str

describe('palindrome', function() {
  
  it('returns a boolean', function() {
    str = "goo"
    expect(typeof(palindrome(str)) == 'boolean').equal(true)
  })
  
  it('return false if string is empty', () => {
    str = ""
    expect(palindrome(str)).equal(false)
  })
  
  it('needs to be longer than a single character', () => {
    str = "g"
    expect(palindrome(str)).equal(false)
  })
  
  it('ignores spaces', () => {
    str = "    "
    expect(palindrome(str)).equal(false)
  })
  
  it('returns false if a palindrome cannot be made', function() {
    str = "good"
    expect(palindrome(str)).equal(false)
  })
  
  it('returns true if a palindrome can be made', function() {
    str = "good dog"
    expect(palindrome(str)).equal(true)
  })
  
})