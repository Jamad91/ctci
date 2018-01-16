var chai = require('chai');
let assert = chai.assert
let expect = chai.expect
let should = chai.should()
let URLify = require('../../problems/arrays&strings/02_URLify.js').URLify
let str

describe('URLify', function() {

  it('returns a string', function() {
    str = "goo"
    expect(typeof(URLify(str)) == 'string').equal(true)
  })
  
  it('if a string has no spaces, returns string untouched', function() {
    str = "goo"
    expect(URLify(str) == str).equal(true)
  })

  it('returns string with replaced spaces', function() {
    str = "oh my god"
    expect(URLify(str) == "oh%20my%20god").equal(true)
  })
    
})