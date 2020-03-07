/* 
给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列。

数学表达式如下:

如果存在这样的 i, j, k,  且满足 0 ≤ i < j < k ≤ n-1，
使得 arr[i] < arr[j] < arr[k] ，返回 true ; 否则返回 false 。
说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1) 。

2020-03-07
62 / 62 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了81.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了40.00% 的用户
*/

var increasingTriplet = function(nums) {
    if (nums.length < 3) return false;
    let a = Number.MAX_VALUE;
    let b = Number.MAX_VALUE;

    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] <= a) {
            a = nums[i];
        } else if (nums[i] <= b) {
            b = nums[i];
        } else {
            return true;
        }
    }

    return false;
};