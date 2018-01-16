var chai = require('chai');
let assert = chai.assert
let expect = chai.expect
let should = chai.should()
let strRotation = require('../../problems/arrays&strings/08_strRotation.js').strRotation

describe('strRotation', function() {
  
  xit('returns a string', function() {
    str = "goo"
    expect(typeof(strRotation(str)) == 'string').equal(true)
  })
  
  
})