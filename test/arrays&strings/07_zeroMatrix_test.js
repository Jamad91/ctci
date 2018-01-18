var chai = require('chai');
let assert = chai.assert
let expect = chai.expect
let should = chai.should()
let zeroMatrix = require('../../problems/arrays&strings/07_zeroMatrix.js').zeroMatrix
let arr

describe('zeroMatrix', function() {

  it('returns an array', function() {
    arr = []
    expect(typeof(zeroMatrix(arr)) == 'object').equal(true)
  })

  it('returns array untouched if no 0 is found', () => {
    arr = [[1,2], [4,5]]
    let newArr = zeroMatrix(arr)
    expect(newArr[0][0] === 1 && newArr[0][1] === 2 && newArr[1][0] === 4, newArr[1][1] === 5).equal(true)
  })

  describe('0 is found', () => {
    it('row contains only zeroes', () => {
      arr = [[1,2,3], [4,0,5], [6,7,8], [9,10,11]]
      let newArr = zeroMatrix(arr)
      expect(newArr[1][0] === 0 && newArr[1][2] === 0).equal(true)
    })

    it('column contains only zeroes', () => {
      arr = [[1,2,3], [4,0,5], [6,7,8], [9,10,11]]
      let newArr = zeroMatrix(arr)
      expect(newArr[0][1] === 0 && newArr[1][1] === 0 && newArr[2][1] === 0).equal(true)
    })

    it('works with non rectanglur matrixes', () => {
      arr = [[1,2,3], [4,0,5], [6,7,8], [9,10,11]]
      arr[1].push(5)
      arr[1].push(9)
      arr[3].push(11)
      let newArr = zeroMatrix(arr)
      expect(newArr[1][0] === 0 && newArr[1][2] === 0).equal(true)
    })
  })


})
