/* 
给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。

2019-07-15
211 / 211 个通过测试用例
执行用时 : 272 ms, 在Perfect Squares的JavaScript提交中击败了80.15% 的用户
内存消耗 : 37.2 MB, 在Perfect Squares的JavaScript提交中击败66.98% 的用户
*/

var maxProfit = function(prices) {
    if (prices.length === 0) return 0;
    let buy = new Array(prices.length + 1).fill(0);
    let sell = new Array(prices.length + 1).fill(0);
    buy[1] = -prices[0];
    for (let i = 2; i <= prices.length; i += 1) {
        buy[i] = Math.max(buy[i - 1], sell[i - 2] - prices[i - 1]);
        sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i - 1])
    }
    return sell.pop();
};