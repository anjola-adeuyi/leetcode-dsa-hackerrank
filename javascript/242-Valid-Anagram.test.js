const isAnagram = require('./242-Valid-Anagram');

test('isAnagram test', () => {
  expect(isAnagram('anagram', 'nagaram')).toBe(true);
  expect(isAnagram('rat', 'car')).toBe(false);
});
