// Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional structures?

function isUnique(str) {
  let obj = {}
  for (let i = 0; i < str.length; i++) {
    if(!obj[str[i]]) {
      obj[str[i]] = true 
    } else {
      return false
    }
  }
  return true
}

if(typeof exports !== 'undefined') {
    module.exports.isUnique = isUnique;
}