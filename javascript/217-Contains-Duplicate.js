/**
 * @param {number[]} nums
 * @return {boolean}
 */

// var containsDuplicate = function (nums) {
//   const hashSet = new Set(nums);
//   return hashSet.size != nums.length;
// };

var containsDuplicate = function (nums) {
  const hashSet = new Set();

  for (num of nums) {
    if (hashSet.has(num)) {
      return true;
    }
    hashSet.add(num);
  }
  return false;
};

module.exports = containsDuplicate;

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
