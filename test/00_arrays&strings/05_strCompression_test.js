var chai = require('chai');
let assert = chai.assert
let expect = chai.expect
let should = chai.should()
let strCompression = require('../../problems/00_arrays&strings/05_strCompression.js').strCompression
let str

describe('strCompression', function() {

  it('returns a string', function() {
    str = "goo"
    expect(typeof(strCompression(str)) == 'string').equal(true)
  })

  it('returns properly compressed string', () => {
    str = "aabcccccaaa"
    expect(strCompression(str)).equal('2a1b5c3a')
  })

  it('if output is longer, return input', () => {
    str = "goo"
    expect(strCompression(str)).equal(str)
  })

  it('able to differentiate betweeen uppercase and lowercase', () => {
    str="AAaaxxbbXXXXX"
    expect(strCompression(str)).equal("2A2a2x2b5X")
  })

  it('throws error if numbers are in input', () => {
    str ="evil9"
    function run() {
      return strCompression(str)
    }
    assert.throw(run, Error, "cannot have numbers in string")
  })
})
