const groupAnagrams = require('./49-Group-Anagrams');

test('groupAnagrams test', () => {
  expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual([
    ['eat', 'tea', 'ate'],
    ['tan', 'nat'],
    ['bat'],
  ]);
  expect(groupAnagrams(['a', 'b', 'c'])).toEqual([['a'], ['b'], ['c']]);
  expect(groupAnagrams(['abc', 'bac', 'aaa'])).toEqual([
    ['abc', 'bac'],
    ['aaa'],
  ]);
});
