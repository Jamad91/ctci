let chai = require('chai');
let spies = require('chai-spies');
chai.use(spies)
let assert = chai.assert
let expect = chai.expect
let should = chai.should()
let strRotation = require('../../problems/00_arrays&strings/08_strRotation.js').strRotation
let isSubstring = require('../../problems/00_arrays&strings/08_strRotation.js').isSubstring
let spy = chai.spy(isSubstring)
let str1
let str2

describe('strRotation', function() {

  it('returns a boolean', function() {
    str1 = "goo"
    str2 = "goo"
    expect(typeof(strRotation(str1, str2)) == 'boolean').equal(true)
  })

  it('returns false if strings are different length', () => {
    str1 = "food"
    str2 = "goo"
    expect(strRotation(str1, str2)).equal(false)
  })

  it('returns true if two strings are the same', () => {
    str1 = "goo"
    str2 = "goo"
    expect(strRotation(str1, str2)).equal(true)
  })

  it('returns false if same length if contains different characters', () => {
    str1 = "abc"
    str2 = "goo"
    expect(strRotation(str1, str2)).equal(false)
  })

  it('returns false if just a different permutation', () => {
    str1 = "door"
    str2 = "odor"
    expect(strRotation(str1, str2)).equal(false)
  })

  it('returns false if more than one call to isSubstring', () => {
    str1 = 'waterbottle'
    str2 = 'erbottlewat'
    strRotation(str1,str2)
    strRotation(str1,str2)
    expect(spy).to.have.been.called.twice;
  })

  it("returns true if it's a rotation", () => {
    str1 = 'waterbottle'
    str2 = 'erbottlewat'
    expect(strRotation(str1, str2)).equal(true)
  })
})
