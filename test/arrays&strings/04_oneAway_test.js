var chai = require('chai');
let assert = chai.assert
let expect = chai.expect
let should = chai.should()
let oneAway = require('../../problems/arrays&strings/04_oneAway.js').oneAway
let str1
let str2

describe('oneAway', function() {
  
  xit('returns a boolean', function() {
    str1 = "goo"
    str2 = "boo"
    expect(typeof(oneAway(str1, str2)) == 'boolean').equal(true)
  })
  
  
})