// Given an image represented by a NxN matrix, where each pixel in the iamge is 4 bytes,
// write a methode to rotate the image by 90 degrees
// Can you do this in place?

function rotateMatrix(arr) {
  let result = []
  let current;
  for (let i = 0; i < arr.length; i++) {
    current = []
    for (let j = 0; j < arr[i].length; j++) {
      current.push(arr[j][i])
    }
    result.push(current)
  }
  return result
}

if(typeof exports !== 'undefined') {
    module.exports.rotateMatrix = rotateMatrix;
}
