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

  return true;
};

module.exports = isAnagram;

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false
