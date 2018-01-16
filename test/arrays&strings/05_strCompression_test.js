var chai = require('chai');
let assert = chai.assert
let expect = chai.expect
let should = chai.should()
let strCompression = require('../../problems/arrays&strings/05_strCompression.js').strCompression
let str

describe('strCompression', function() {
  
  xit('returns a string', function() {
    str = "goo"
    expect(typeof(strCompression(str)) == 'string').equal(true)
  })
  
  
})