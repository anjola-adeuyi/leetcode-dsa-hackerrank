/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let diff = target - num;
    if (map[diff] !== undefined) {
      return [map[diff], i];
    }
    map[num] = i;
  }
  return [];
};
module.exports = twoSum;

console.log(twoSum([2, 7, 11, 15], 9));

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
