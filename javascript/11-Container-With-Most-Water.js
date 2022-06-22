/**
 * @param {number[]} height
 * @return {number}
 */

// var maxArea = function (height) {
//   let max = 0;
//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       let area = Math.min(height[i], height[j]) * (j - i);
//       max = Math.max(max, area);
//     }
//   }

//   return max;
// };

var maxArea = function (height) {
  let max = 0;
  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    curr = (j - i) * Math.min(height[i], height[j]);
    max = Math.max(curr, max);
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  return max;
};

module.exports = maxArea;

// Example 1
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// Example 2:
// Input: height = [1,1]
// Output: 1
console.log(maxArea([1, 1]));
