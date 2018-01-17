var chai = require('chai');
let assert = chai.assert
let expect = chai.expect
let should = chai.should()
let oneAway = require('../../problems/arrays&strings/04_oneAway.js').oneAway
let str1
let str2

describe('oneAway', function() {

  it('returns a boolean', function() {
    str1 = "goo"
    str2 = "boo"
    expect(typeof(oneAway(str1, str2)) == 'boolean').equal(true)
  })

  it('returns false if two or more removals or insertions', function() {
    str1 = "goods"
    str2 = "boo"
    expect(oneAway(str1, str2)).equal(false)
  })

  it('returns false if there are two or more replacements', function() {
    str1 = "goat"
    str2 = "boo"
    expect(oneAway(str1, str2)).equal(false)
  })

  it('returns true if strings are the same', function() {
    str1 = "boo"
    str2 = "boo"
    expect(oneAway(str1, str2)).equal(true)
  })

  it('returns true if there is only one insertion or removal', function() {
    str1 = "bo"
    str2 = "boo"
    expect(oneAway(str1, str2)).equal(true)
  })

  it('returns true if there is only one replacement', function() {
    str1 = "goo"
    str2 = "boo"
    expect(oneAway(str1, str2)).equal(true)
  })

})
