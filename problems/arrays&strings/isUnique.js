// Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional structures?

function isUnique(str) {
  // with data strutures
  let obj = {}
  str = str.split(' ').join('')
  for (let i = 0; i < str.length; i++) {
    if(!obj[str[i]]) {
      obj[str[i]] = true 
    } else {
      return false
    }
  }
  return true
  
  // without data structures
  // for(let i = 0; i < str.length; i++) {
  //   for(let j = i + 1; j < str.length; j++) {
  //     if (str[i] === str[j] && str[i] != " ") {
  //       return false
  //     }
  //   }
  // }
  // return true
}

if(typeof exports !== 'undefined') {
    module.exports.isUnique = isUnique;
}