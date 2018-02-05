var chai = require('chai');
let assert = chai.assert
let expect = chai.expect
let should = chai.should()
let rotateMatrix = require('../../problems/00_arrays&strings/06_rotateMatrix.js').rotateMatrix
let arr

describe('rotateMatrix', function() {

  it('returns an array', function() {
    arr = []
    expect(typeof(rotateMatrix(arr)) == 'object').equal(true)
  })

  it('should have no empty arrays', () => {
    arr = [[1,2,3],[4,5,6],[7,8,9]]
    result = rotateMatrix(arr)
    expect(result[0].length > 0 && result[1].length > 0 && result[2].length > 0).equal(true)
  })

  it('input and output arrays are same length', () => {
    arr = [[1,2,3],[4,5,6],[7,8,9]]
    expect(rotateMatrix(arr).length == arr.length).equal(true)
  })

  it('output is rotated version of input', () => {
    arr = [[1,2,3],[4,5,6],[7,8,9]]
    result = rotateMatrix(arr)
    expect(arr[0][0] === result[0][result.length - 1] && arr[0][1] === result[1][result.length - 1] && arr[0][2] === result[2][result.length - 1])
  })


})
