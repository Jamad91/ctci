var chai = require('chai');
let assert = chai.assert
let expect = chai.expect
let should = chai.should()
let URLify = require('../../problems/arrays&strings/02_URLify.js').URLify
let str

describe('URLify', function() {

  xit('returns a string', function() {
    str = "goo"
    expect(typeof(URLify(str)) == 'string').equal(true)
  })
  
  
})