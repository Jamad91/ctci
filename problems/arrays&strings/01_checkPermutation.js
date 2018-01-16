// Given two strings, decide if one is a permutation of the other

function checkPermutation(str1, str2) {
  str1 = str1.split('').sort().join('')
  str2 = str2.split('').sort().join('')
  return str1 === str2
}

if(typeof exports !== 'undefined') {
    module.exports.checkPermutation = checkPermutation;
}