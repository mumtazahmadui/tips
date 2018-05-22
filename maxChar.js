// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

let arr = [1,0, 3,1,2,7];

let minValue = arr[0];
let maxValue = arr[0];
let len = arr.length;

for(let i = 0; i<len; i++) {
  if(minValue > arr[i]) {
   minValue = arr[i]
  } if(maxValue < arr[i]) {
    maxValue = arr[i]
  }
}
console.log(minValue);
console.log(maxValue);


//second approach

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
