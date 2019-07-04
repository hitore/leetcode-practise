/* 
给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。

2019-07-04
184 / 184 个通过测试用例
执行用时 : 88 ms, 在Perfect Squares的JavaScript提交中击败了99.43% 的用户
内存消耗 : 36.2 MB, 在Perfect Squares的JavaScript提交中击败了69.24% 的用户
*/

var maxProduct = function(nums) {
    if (nums.length === 0) return 0;
    let res = -Number.MAX_VALUE;
    let min = 1;
    let max = 1;
    for (let i = 0; i < nums.length; i += 1) {
        let m1 = max * nums[i];
        let m2 = min * nums[i];
        max = Math.max(nums[i], m1, m2);
        min = Math.min(nums[i], m1, m2);
        res = Math.max(res, max);
    }
    return res;
};