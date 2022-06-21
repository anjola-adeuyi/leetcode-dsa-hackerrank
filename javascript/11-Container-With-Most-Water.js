/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let area = Math.min(height[i], height[j]) * (j - i);
      max = Math.max(max, area);
    }
  }

  return max;
};
