/* 
给定一个非负整数 n，计算各位数字都不同的数字 x 的个数，其中 0 ≤ x < 10^n 。

2020-03-18
9 / 9 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了69.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了55.00% 的用户
*/

var countNumbersWithUniqueDigits = function(n) {
    if (n === 0) return 1;
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 10;

    for (let i = 2; i < dp.length; i += 1) {
        dp[i] = dp[i - 1] + ((dp[i - 1] - dp[i - 2]) * (10 - i + 1));
    }

    return dp[n];
};