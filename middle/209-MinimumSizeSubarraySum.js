/* 
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead

Example: 

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.

2019-05-06
15 / 15 个通过测试用例
执行用时 : 92 ms, 在Minimum Size Subarray Sum的JavaScript提交中击败了96.52% 的用户
内存消耗 : 35.8 MB, 在Minimum Size Subarray Sum的JavaScript提交中击败了10.00% 的用户
*/

var minSubArrayLen = function(s, nums) {
    let start = 0;
    let end = 0;
    let sum = 0;
    let res = Number.MAX_VALUE;
    while(start < nums.length) {
        sum += nums[start];
        if (sum >= s) {
            res = Math.min(res, start - end + 1);
            sum -= nums[start] + nums[end];
            end += 1;
        } else {
            start += 1;
        }
    }
    res = res === Number.MAX_VALUE ? 0 : res;
    return res;
};