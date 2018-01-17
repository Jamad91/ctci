// Implement a method to perform basic string compression using the counts of repeated characters.
// Ex: the string aabcccccaaa would become 2a1b5c3a.
// If the compressed string would not become smaller than the original, return the original strings
// You can assume the string has only uppercase and lowercase letters

function strCompression(str) {
  let arr = []
  let current = [str[0]]
  let result = ""
  for(let i = 1; i <= str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {throw new Error("cannot have numbers in string")}
    if (str[i] != current[0]) {
      arr.push(current)
      current = [str[i]]
    } else {
      current.push(str[i])
    }
  }
  for (let i = 0; i < arr.length; i++) {
    result += `${arr[i].length}${arr[i][0]}`
  }
  return result.length < str.length && result.length > 0
    ? result
    : str
}

if(typeof exports !== 'undefined') {
    module.exports.strCompression = strCompression;
}
