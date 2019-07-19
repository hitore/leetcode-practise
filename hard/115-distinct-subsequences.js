/* 
给定一个字符串 S 和一个字符串 T，计算在 S 的子序列中 T 出现的个数。

一个字符串的一个子序列是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）

2019-07-19
63 / 63 个通过测试用例
执行用时 : 872 ms, 在Perfect Squares的JavaScript提交中击败了91.15% 的用户
内存消耗 : 37.2 MB, 在Perfect Squares的JavaScript提交中击败100% 的用户
*/

var numDistinct = function(s, t) {
    let dp = new Array(t.length + 1).fill(0).map(e => new Array(s.length + 1).fill(0));
    dp[0].fill(1);
    for (let j = 1; j <= t.length; j += 1) {
        for (let k = 1; k <= s.length; k += 1) {
            if (t[j - 1] === s[k - 1]) {
                dp[j][k] = dp[j - 1][k - 1] + dp[j][k - 1];
            } else {
                dp[j][k] = dp[j][k - 1];
            }
        }
    }
    return dp.pop().pop();
};