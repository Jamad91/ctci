// Given a string, write a function to check if a permutation is a palindrome. 
// A palindrome is a string that reads backwards as it does forwards
// A permutation is a rearrangemnet of letters
// The palindrome does not need to be dictionary/real words
// Ex: palindrome(Tact Coa)

function palindrome(str) {
  let obj = {}
  let oddLetter = false
  str = str.split(' ').join('')
  if (str.length < 2) {return false}
  for (let i = 0; i < str.length; i++) {
    obj[str[i]]
      ? obj[str[i]]++
      : obj[str[i]] = 1
  }
  let keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] % 2 === 1) {
      if (!oddLetter) {
        oddLetter = true
      } else {
        return false
      }
    }
  }
  return true
}

if(typeof exports !== 'undefined') {
    module.exports.palindrome = palindrome;
}