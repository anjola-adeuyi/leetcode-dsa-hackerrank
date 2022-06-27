// const trappingWater = (arr) => {
//   let len = arr.length;
//   let maxLeft = [];
//   let maxRight = [];

//   let maxEl = 0;
//   let maxElRight = 0;

//   let maxRainDrop = 0;

//   for (let i = 0; i < len; i++) {
//     maxEl = Math.max(arr[i], maxEl);
//     maxLeft.push(maxEl);
//   }

//   for (let i = len - 1; i >= 0; i--) {
//     maxElRight = Math.max(arr[i], maxElRight);
//     maxRight.unshift(maxElRight);
//   }

//   for (let i = 0; i < len; i++) {
//     let raindrop = Math.min(maxLeft[i], maxRight[i]) - arr[i];
//     if (raindrop <= 0) {
//       raindrop = 0;
//     }
//     maxRainDrop += raindrop;
//   }

//   return maxRainDrop;
// };

const trappingWater = (height) => {
  if (!height) {
    return 0;
  }

  let l = 0;
  let r = height.length - 1;
  let leftMax = height[l];
  let rightMax = height[r];
  let maxRain = 0;

  while (l < r) {
    if (leftMax < rightMax) {
      l += 1;
      leftMax = Math.max(leftMax, height[l]);
      maxRain += leftMax - height[l];
      console.log('maxRain', maxRain);
    } else {
      r -= 1;
      rightMax = Math.max(rightMax, height[r]);
      maxRain += rightMax - height[r];
      console.log('maxRain', maxRain);
    }
  }

  return maxRain;
};

console.log(trappingWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
