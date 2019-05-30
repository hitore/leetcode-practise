/* 
Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

2019-05-30
588 / 588 个通过测试用例
执行用时 : 272 ms, 在Perfect Squares的JavaScript提交中击败了41.13% 的用户
内存消耗 : 37.2 MB, 在Perfect Squares的JavaScript提交中击败了60.98% 的用户
*/

var numSquares = function(n) {
    let dp = Array(n + 1).fill(Number.MAX_VALUE);

    for (let i = 1; i * i <= n; i += 1) {
        dp[i * i] = 1;
    }
    for (let i = 1; i <= n; i += 1) {
        for (let j = 1; i + j * j <= n; j += 1) {
            dp[i + j * j] = Math.min(dp[i] + 1, dp[i + j * j]);
        }
    }

    return dp[n];
};