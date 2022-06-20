/**
 * @param {string} s
 * @return {number}
 */

// var romanToInt = function (s) {
//   let map = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let result = 0;
//   for (let i = 0; i < s.length; i++) {
//     let curr = s.charAt(i);
//     let next = s.charAt(i + 1);
//     if (map[curr] < map[next]) {
//       result -= map[curr];
//     } else {
//       result += map[curr];
//     }
//   }

//   return result;
// };

var romanToInt = function (s) {
  let romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let arr = s.split('');

  let sum = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    // IV : 4
    if (romans[arr[i]] === romans['V']) {
      if (romans[arr[i - 1]] === romans['I']) {
        sum -= 1 * 2;
      }
    }
    // IX : 4
    if (romans[arr[i]] === romans['X']) {
      if (romans[arr[i - 1]] === romans['I']) {
        sum -= 1 * 2;
      }
    }
    // XL : 40
    if (romans[arr[i]] === romans['L']) {
      if (romans[arr[i - 1]] === romans['X']) {
        sum -= 10 * 2;
      }
    }
    // XC : 90
    if (romans[arr[i]] === romans['C']) {
      if (romans[arr[i - 1]] === romans['X']) {
        sum -= 10 * 2;
      }
    }
    // CD : 400
    if (romans[arr[i]] === romans['D']) {
      if (romans[arr[i - 1]] === romans['C']) {
        sum -= 100 * 2;
      }
    }
    // CM : 900
    if (romans[arr[i]] === romans['M']) {
      if (romans[arr[i - 1]] === romans['C']) {
        sum -= 100 * 2;
      }
    }

    sum += romans[arr[i]];
  }

  return sum;
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
