/* 
给定一个未经排序的整数数组，找到最长且连续的的递增序列。

2019-07-02
36 / 36 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 87.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 9.62% 的用户
*/

var findLengthOfLCIS = function(nums) {
    if (nums.length === 0) return 0;
    let dp = [];
    let max = 1;
    for (let i = 0; i < nums.length; i += 1) {
        if (dp.length && nums[i] <= dp[dp.length - 1]) {
            max = Math.max(max, dp.length);
            dp = [nums[i]];
        } else {
            dp.push(nums[i]);
        }
    }
    max = Math.max(max, dp.length);
    return max;
};