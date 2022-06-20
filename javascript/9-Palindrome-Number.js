/**
 * @param {number} x
 * @return {boolean}
 */

// var isPalindrome = function (x) {
//   if (x < 0) return false;
//   let num = x;
//   let reversed = 0;
//   while (num > 0) {
//     reversed = reversed * 10 + (num % 10);
//     num = Math.floor(num / 10);
//   }
//   return reversed === x;
// };

var isPalindrome = function (x) {
  // Creates array from int characters
  // 121 -> [1,2,1]
  let arr = Array.from(String(x), Number);
  console.log(arr);

  // Uses two pointer
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
console.log(isPalindrome(121));

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
console.log(isPalindrome(-121));

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
console.log(isPalindrome(10));

console.log(isPalindrome('abcba'));
