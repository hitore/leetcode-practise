/* 
给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
示例:

输入: [9,6,4,2,3,5,7,0,1]
输出: 8 

2019-03-21
122 / 122 个通过测试用例
执行用时 : 212 ms, 在Missing Number的JavaScript提交中击败了21.11% 的用户
内存消耗 : 37.3 MB, 在Missing Number的JavaScript提交中击败了0.00% 的用户
*/

var missingNumber = function(nums) {
    nums = nums.sort((a, b) => a - b);
    let res = -1;
    for (let i = 0; i < nums.length; i += 1) {
        if (i !== nums[i]) {
            break;
        }
        res = nums[i];
    }
    return res + 1;
};