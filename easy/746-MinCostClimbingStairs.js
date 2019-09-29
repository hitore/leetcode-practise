/* 
数组的每个索引做为一个阶梯，第 i个阶梯对应着一个非负数的体力花费值 cost[i](索引从0开始)。

每当你爬上一个阶梯你都要花费对应的体力花费值，然后你可以选择继续爬一个阶梯或者爬两个阶梯。

您需要找到达到楼层顶部的最低花费。在开始时，你可以选择从索引为 0 或 1 的元素作为初始阶梯。

2019-09-29
276 / 276 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 97.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 73.62% 的用户
*/

var minCostClimbingStairs = function(cost) {
  if (cost.length === 0) {
      return 0;
  } else if (cost.length === 1 || cost.length === 2) {
      return Math.min(cost[0], cost[1]);
  }

  let dp = new Array(cost.length + 1).fill(0);
  for (let i = 2; i < cost.length + 1; i += 1) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  
  return dp.pop();
};