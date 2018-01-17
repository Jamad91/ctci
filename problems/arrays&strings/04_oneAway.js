// There are three type of edits that can be performed on strings
// 1) Insert a character
// 2) Remove a character
// 3) Replace a character
// Given two strings, write a function to check if they are one or zero edits away

function oneAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) == 2) {return false}
  let shortest;
  let difference = false
  str1.length > str2.length
    ? shortest = str2
    : shortest = str1
  for (let i = 0; i < shortest.length; i++) {
    if (str1[i] != str2[i]) {
      if (!difference) {
        difference = true
      } else {
        return false
      }
    }
  }
  return true
}

if(typeof exports !== 'undefined') {
    module.exports.oneAway = oneAway;
}
