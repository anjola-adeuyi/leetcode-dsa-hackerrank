/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    let profit = 0;
    if (prices[left] < prices[right]) {
      profit = prices[right] - prices[left];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      left = right;
    }
    right++;
  }

  return maxProfit;
};
