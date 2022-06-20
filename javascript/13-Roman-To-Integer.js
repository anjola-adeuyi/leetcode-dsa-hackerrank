/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let curr = s.charAt(i);
    let next = s.charAt(i + 1);
    if (map[curr] < map[next]) {
      result -= map[curr];
    } else {
      result += map[curr];
    }
  }

  return result;
};

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
console.log(romanToInt('III'));

// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
console.log(romanToInt('LVIII'));

// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
console.log(romanToInt('MCMXCIV'));
