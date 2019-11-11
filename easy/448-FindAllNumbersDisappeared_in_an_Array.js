/* 
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

2019-05-28
34 / 34 个通过测试用例
执行用时 : 128 ms, 在Find All Numbers Disappeared in an Array的JavaScript提交中击败了100.00% 的用户
内存消耗 : 43.5 MB, 在Find All Numbers Disappeared in an Array的JavaScript提交中击败了87.93% 的用户
*/

var findDisappearedNumbers = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i += 1) {
        nums[Math.abs(nums[i]) -1] = -Math.abs(nums[Math.abs(nums[i]) -1]);
    }
    for (let j = 0; j < nums.length; j += 1) {
        if (nums[j] > 0) {
            res.push(j + 1);
        }
    }

    return res;
};