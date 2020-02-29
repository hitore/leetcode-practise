/* 
给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

2020-02-29
182 / 182 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了72.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了80.00% 的用户
*/

var coinChange = function(coins, amount) {
    let len = coins.length;
    let arr = new Array(amount + 1).fill(Number.MAX_VALUE);
    arr[0] = 0;

    for (let i = 0; i < amount + 1; i += 1) {
        for (let m = 0; m < len; m += 1) {
            if (i - coins[m] >= 0) {
                arr[i] = Math.min(arr[i], arr[i-coins[m]] + 1);
            }
        }
    }

    if (arr[amount] === Number.MAX_VALUE) {
        return -1;
    }
    return arr[amount];
};