/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
  let hashMap = {};

  if (s.length != t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]]) {
      hashMap[s[i]]++;
    } else {
      hashMap[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (hashMap[t[i]]) {
      hashMap[t[i]]--;
    } else {
      return false;
    }
  }

  return hashMap;
};
