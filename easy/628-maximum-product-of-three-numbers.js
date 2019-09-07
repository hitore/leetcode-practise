/* 
给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积

2019-06-28
83 / 83 个通过测试用例
执行用时 : 128 ms , 在所有JavaScript提交中击败了 80.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 20.62% 的用户
*/

var maximumProduct = function(nums) {
    nums.sort((a, b) => a - b);
    let len = nums.length;
    return Math.max(nums[len-1] * nums[len-2] * nums[len-3], nums[0] * nums[1] * nums[len-1]);
};