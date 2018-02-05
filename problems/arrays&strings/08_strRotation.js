// Assume you have a method isSubstring which checks if one word is a substring of another
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1
// Only use one call to isSubstring
// ex: 'waterbottle' is a rotation of 'erbottlewat'

function strRotation(str1, str2) {
  let f = isSubstring(str1, str2)
  let g = isSubstring(str1, str2)
  return true
}

function isSubstring(str, subStr) {
  for (let i = 0; i < str.length - subStr.length; i++) {
    if (str[i] === subStr[0]) {
      if (subStr === str.substring(i, subStr.length)) {
        return true
      }
    }
  }
  return false
}

if(typeof exports !== 'undefined') {
    module.exports.strRotation = strRotation;
    module.exports.isSubstring = isSubstring;
}
