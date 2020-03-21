/* 
给出一个由无重复的正整数组成的集合，找出其中最大的整除子集，子集中任意一对 (Si，Sj) 都要满足：Si % Sj = 0 或 Sj % Si = 0。

如果有多个目标子集，返回其中任何一个均可。

2020-03-21
41 / 41 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了97.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了93.00% 的用户
*/

var largestDivisibleSubset = function(nums) {
    if (nums.length === 0) return [];
    let len = nums.length;
    let dp = new Array(len).fill(0);
    let maxNum = 0;
    let maxIndex = 0;
    let res = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < len; i += 1) {
        for (let m = i + 1; m < len; m += 1) {
            if (nums[m] % nums[i] === 0) {
                dp[m] = Math.max(dp[i] + 1, dp[m]);
                if (dp[m] >= maxNum) {
                    maxNum = dp[m];
                    maxIndex = m;
                }
            }
        }
    }

    for (let i = maxIndex; i >= 0; i -= 1) {
        if (nums[maxIndex] % nums[i] === 0 && dp[i] === maxNum) {
            res.unshift(nums[i]);
            maxNum -= 1;
        }
    }

    return res;
};