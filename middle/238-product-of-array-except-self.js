/* 
给定长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

2019-07-11
17 / 17 个通过测试用例
执行用时 : 136 ms, 在Ugly Number II的JavaScript提交中击败了98.54% 的用户
内存消耗 : 36.6 MB, 在Ugly Number II的JavaScript提交中击败了27.00% 的用户
*/

var productExceptSelf = function(nums) {
    let res = new Array(nums.length).fill(1);
    let total = 1;
    for (let i = 0; i < nums.length; i += 1) {
        res[i] *= total;
        total *= nums[i];
    }
    total = 1;
    for (let i = nums.length - 1; i >=0; i -= 1) {
        res[i] *= total;
        total *= nums[i];
    }
    return res;
};