// Write a method that replaces all spaces in a string with '%20'
// You may assume that the string has sufficient space at the end to hold the additional characters
// and that you are given the 'true' length of the string

function URLify(str) {
  return str.split(' ').join('%20')
}

if(typeof exports !== 'undefined') {
    module.exports.URLify = URLify;
}