/* 
给定一个由正整数组成且不存在重复数字的数组，找出和为给定目标正整数的组合的个数。

2020-03-26
17 / 17 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了100.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了76.00% 的用户
*/

var combinationSum4 = function(nums, target) {
    let dp = new Array(target + 1).fill(0);
    let len = nums.length;
    dp[0] = 1;

    for (let i = 1; i <= target; i += 1) {
        for (let m = 0; m < len; m += 1) {
            if (i >= nums[m]) {
                dp[i] += dp[i - nums[m]];
            }
        }
    }

    return dp.pop();
};