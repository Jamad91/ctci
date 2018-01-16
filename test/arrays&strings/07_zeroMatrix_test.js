var chai = require('chai');
let assert = chai.assert
let expect = chai.expect
let should = chai.should()
let zeroMatrix = require('../../problems/arrays&strings/07_zeroMatrix.js').zeroMatrix
let arr

describe('zeroMatrix', function() {
  
  xit('returns an array', function() {
    arr = []
    expect(typeof(zeroMatrix(arr)) == 'object').equal(true)
  })
  
  
})