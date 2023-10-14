function isPalindrome(word) {
  // Write your algorithm here
  const lowercasedWord = word.toLowerCase();
  const reversedWord = lowercasedWord.split('').reverse().join('');
  return lowercasedWord === reversedWord;
}

/* 
  Add your pseudocode here
  function isPalindrome(word):
  Convert the word to lowercase
  Reverse the word
  Compare the reversed word with the original word
  If they are the same, return true (it is a palindrome)
  Otherwise, return false (it is not a palindrome)

*/
console.log(isPalindrome("racecar")); // Expected output: true
console.log(isPalindrome("hello")); // Expected output: false
console.log(isPalindrome("level")); // Expected output: true
console.log(isPalindrome("12321")); // Expected output: true
console.log(isPalindrome("Palindrome")); // Expected output: false

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;