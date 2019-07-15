/* 
给定一个无序的整数数组，找到其中最长上升子序列的长度。

2019-07-15
24 / 24 个通过测试用例
执行用时 : 272 ms, 在Perfect Squares的JavaScript提交中击败了58.13% 的用户
内存消耗 : 37.2 MB, 在Perfect Squares的JavaScript提交中击败58.98% 的用户
*/

var lengthOfLIS = function(nums) {
    if (nums.length <= 1) return nums.length;
    let dp = new Array(nums.length).fill(1);
    for (let i = 0; i < nums.length; i += 1) {
        for (j = 0; j < i; j += 1) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
};