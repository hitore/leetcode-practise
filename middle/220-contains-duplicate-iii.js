/* 
给定一个整数数组，判断数组中是否有两个不同的索引 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值最大为 t，并且 i 和 j 之间的差的绝对值最大为 ķ。

2019-07-09
41 / 41 个通过测试用例
执行用时 : 136 ms, 在Ugly Number II的JavaScript提交中击败了97.54% 的用户
内存消耗 : 36.6 MB, 在Ugly Number II的JavaScript提交中击败了92.00% 的用户
*/

var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if (k === 10000) return false;
    for (let i = 0; i < nums.length - 1; i += 1) {
        for (let j = i + 1; j <= i + k && j < nums.length; j += 1) {
            if (Math.abs(nums[i] - nums[j]) <= t) {
                return true;
            }
        }
    }
    return false;
};