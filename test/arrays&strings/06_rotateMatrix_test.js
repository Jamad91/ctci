var chai = require('chai');
let assert = chai.assert
let expect = chai.expect
let should = chai.should()
let rotateMatrix = require('../../problems/arrays&strings/06_rotateMatrix.js').rotateMatrix
let arr

describe('rotateMatrix', function() {
  
  xit('returns an array', function() {
    arr = []
    expect(typeof(rotateMatrix(arr)) == 'object').equal(true)
  })
  
  
})