// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0

function zeroMatrix(arr) {
  let zero
  for(let i = 0; i < arr.length; i++) {
    zero = [i]
    for(let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        zero.push(j)
        break
      }
    }
    if(zero.length === 2) {break}
  }
  if (!zero || zero.length === 1) {return arr}
  for(let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === zero[1]) {
        arr[i][j] = 0
      } else if (j === zero[0]) {
        arr[i][j] = 0
      }
    }
  }
  return arr
}

if(typeof exports !== 'undefined') {
    module.exports.zeroMatrix = zeroMatrix;
}
