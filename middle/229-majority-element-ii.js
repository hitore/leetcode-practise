/* 
给定一个大小为 n 的数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。

说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1)。

2019-07-10
66 / 66 个通过测试用例
执行用时 : 136 ms, 在Ugly Number II的JavaScript提交中击败了85.54% 的用户
内存消耗 : 36.6 MB, 在Ugly Number II的JavaScript提交中击败了57.00% 的用户
*/

var majorityElement = function(nums) {
    let res1 = 0;
    let res2 = 0;
    let num1 = 0;
    let num2 = 0;
    let res = [];
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === res1) {num1 += 1;continue;}
        if (nums[i] === res2) {num2 += 1;continue;}
        if (num1 === 0) {res1 = nums[i];num1 += 1;continue;}
        if (num2 === 0) {res2 = nums[i];num2 += 1;continue;}
        num1 -= 1;
        num2 -= 1;
    }
    num1 = 0;
    num2 = 0;
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === res1) num1 += 1;
        if (nums[i] === res2) num2 += 1;
    }
    if (num1 > nums.length / 3) {
        res.push(res1);
    }
    if (num2 > nums.length / 3 && res1 !== res2) {
        res.push(res2);
    }
    return res;
};