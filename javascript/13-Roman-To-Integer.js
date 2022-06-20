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
